import { Injectable } from '@angular/core';
// npm notification pakage
import { Products } from '../model/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList: Array<Products> = [];

  constructor() { }

  // list item from cart object

  getCartItem(): Products[] {
    return this.cartList;
  }


  // add item function to the shopping cart
  addItemTocart(products: Products): void {

    let addItem = new Products();
    addItem = products;
    const indexItm = this.cartList.findIndex(item => item.id === products.id);
    if (indexItm > -1) {
      this.cartList[indexItm] = products;
    } else {
      this.cartList.push(addItem);
    }
  }

  // Remove item from cart list

  removeItem(id: any) {

    const newCartArray = this.cartList.filter(item => item.id !== id);
    return this.cartList = newCartArray;

  }

  // Get the total of the pricesß

  getGranTotal(products: any[]) {
    let total = null;
    products.forEach((item) => {
      if(item.newPrice) {
        total += item.newPrice;
      } else {
        total += item.price;
      }
    });
    return total;
  }

  updateQty(value: any, product: any) {

    this.cartList.forEach((item: any) => {
      if (item.id === product.id) {
        item.newPrice = item.price * value;
      }
    });
  }

}
