import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('assets/data/DATA.json');
  }


  // add product to cart
  addProduct(product: any) {

    // declarate the array to build the data
    let amount: any[] = [];
    // push the data
    amount.push(product);
    // if existe alredy the just update the data
    if (localStorage.getItem('cart')) {
      let temp = JSON.parse(localStorage.getItem('cart'));
      let newTemp = temp.filter(p => p.id !== product.id);
      amount = [...newTemp, product],
        localStorage.setItem('cart', JSON.stringify(amount));
    } else {
      // if not them save the data we push early
      localStorage.setItem('cart', JSON.stringify(amount));
    }

    alert('add product to the cart');
  }

// remove item
  removeItem(id) {
    if (localStorage.getItem('cart')) {
      let temp = JSON.parse(localStorage.getItem('cart'));
      let newList = temp.filter(p => p.id !== id);
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(newList));

      alert('remove item');

    }
  }

}
