import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() item:[] = []

  constructor(private productsServ: ProductsService) { }

  ngOnInit() {
  }

  addItemToCart(product:any) {
    //build new object
    let newObject: any = {
      id: product.id,
      title: product.title,
      gerne: product.gerne,
      description: product.description,
      price: product.price,
      qty: product.qty
    }
    this.productsServ.addProduct(newObject);
  }

}
