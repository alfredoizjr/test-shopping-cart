import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public qty:number = 1; // flat of qty
  @Input() item:[] = [] // data coming from father component

  constructor(private productsServ: ProductsService) { }

  ngOnInit() {
  }

  // add product to the localstorage
  addItemToCart(product:any) {
    //build new object
    let newObject: any = {
      id: product.id,
      title: product.title,
      gerne: product.gerne,
      description: product.description,
      price: product.price * this.qty,
      qty: this.qty
    }
    this.productsServ.addProduct(newObject);
  }

}
