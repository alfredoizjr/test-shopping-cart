import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any[] = [];
  public granTotal: number;
  public hasResult: boolean;
  public newQty: number;

  constructor(private cartServ: CartService) { }

  ngOnInit() {
    this.products = this.cartServ.getCartItem();
    (this.products) ? this.hasResult = true : this.hasResult = false;
    this.granTotal = this.cartServ.getGranTotal(this.products);
  }

  removeItem(id: any) {
    this.products = this.cartServ.removeItem(id);
    this.granTotal = this.cartServ.getGranTotal(this.products);
  }

  updateQtyNumber(value: any, product: any) {
    this.cartServ.updateQty(value, product);
    this.granTotal = null;
    this.granTotal = this.cartServ.getGranTotal(this.cartServ.cartList);
  }

}
