import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// npm notification pakage
import { NotifierService } from "angular-notifier";
import { Products } from '../model/products';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList: Array<Products> = []

  constructor() { }

  /**
   * list item from cart object
   */

  getCartItem(): Products[] {
    return this.cartList;
  }


  /**
   * 
   * add item function to the shopping cart
   * @param products 
   */
  addItemTocart(products: Products): void {

    let addItem = new Products();
    addItem = products;
    let indexItm = this.cartList.findIndex(item => item.id == products.id);
    if (indexItm > -1) {
      this.cartList[indexItm] = products;
    } else {
      this.cartList.push(addItem);
    }
  }

  /**
   * Remove item from cart list
   * @param id 
   */

  removeItem(id: any) {

    let newCartArray = this.cartList.filter(item => item.id !== id);
    return this.cartList = newCartArray;

  }

  /**
   * Get the total of the prices
   * @param products 
   */

  getGranTotal(products: Products[]) {
    let total = null;
    products.forEach((item) => {
      total += item.price;
    })
    return total;
  }

}
