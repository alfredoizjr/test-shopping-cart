import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  public id: string = null;
  public product: any[] = [];
  public routerSubcribe: Subscription;
  public productSubcription: Subscription;
  public qty: number = 1;

  constructor(
    private activeRouter: ActivatedRoute,
    private productServ: ProductsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    // get id parmas from url
    this.routerSubcribe = this.activeRouter.params.subscribe(params => {
      this.id = params.id;
    });
    // get data and filtered by id
    this.productSubcription = this.productServ.getProducts().subscribe((data: any) => {
      this.product = data.filter(p => (p.id === this.id));
    });

  }


  // add product to cart
  setProduct(product: any) {
    //build new object
    let newObject: any = {
      id: product.id,
      title: product.title,
      gerne: product.gerne,
      description: product.description,
      price: product.price * this.qty,
      qty: this.qty
    }

    this.productServ.addProduct(newObject);

  }

  ngOnDestroy() {
    // unsubcribe to prevent memory leak
    this.productSubcription.unsubscribe();
    this.routerSubcribe.unsubscribe();

  }

}
