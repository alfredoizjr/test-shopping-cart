import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Products } from 'src/app/model/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public qty: number; // flat of qty
  @Input() item: [] = []; // data coming from father component

  constructor(private cartServ: CartService) { }

  ngOnInit() {
    this.qty = 0;
  }

  // add product to the localstorage
  addItemToCart(product: Products) {

    const newObject: any = {
      id: product.id,
      title: product.title,
      gerne: product.genre,
      description: product.description,
    };
    newObject.price = (this.qty === 0) ? product.price : Number(product.price) * this.qty;
    newObject.qty = (this.qty === 0) ? 1 : this.qty++;

    if (this.qty === 0) {
      this.qty = 1;
    }

    this.cartServ.addItemTocart(newObject);
  }

}
