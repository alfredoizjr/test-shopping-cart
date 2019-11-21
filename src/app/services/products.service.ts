import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// npm notification pakage
import { NotifierService } from 'angular-notifier';
import { Products } from '../model/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    private notifierService: NotifierService
  ) { }

  getProducts(): Observable<Products[]> {
    // return this.http.get('assets/data/DATA.json');
    return this.http
      .get('assets/data/DATA.json')
      .pipe(
        map((data: Products[]) =>
          data.map(
            (item: Products) =>
              new Products(
                item.id,
                item.description,
                item.genre,
                item.image_url,
                item.price,
                item.title
              )
          )
        )
      );
  }

  // add product to cart
  addProduct(product: any) {
    // declarate the array to build the data
    let amount: any[] = [];
    // push the data
    amount.push(product);
    // if existe alredy the just update the data
    if (localStorage.getItem('cart')) {
      const temp = JSON.parse(localStorage.getItem('cart'));
      const newTemp = temp.filter(p => p.id !== product.id);
      (amount = [...newTemp, product]),
        localStorage.setItem('cart', JSON.stringify(amount));
    } else {
      // if not them save the data we push early
      localStorage.setItem('cart', JSON.stringify(amount));
    }
    // use notification
    this.notifierService.notify('success', 'The item was added to the cart!');
  }

  // remove item
  removeItem(id) {
    if (localStorage.getItem('cart')) {
      const temp = JSON.parse(localStorage.getItem('cart'));
      const newList = temp.filter(p => p.id !== id);
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(newList));
      // use notification
      this.notifierService.notify('error', 'The item was remove!');
    }
  }

  numberOfPages(products: any, pageSize: any): number {
    return Math.ceil(products.length / pageSize);
  }

  setResultOfFiltered(query: any, products: any) {
    return query
      ? products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      )
      : products;
  }
}
