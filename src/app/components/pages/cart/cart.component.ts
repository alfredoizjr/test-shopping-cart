import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any[] = [];
  public granTotal: Number = 0;
  public hasResult = false;

  constructor(private productServ: ProductsService) { }

  ngOnInit() {

    this.setProduct();

  }

  removeItem(id: any) {
    this.productServ.removeItem(id);
    this.setProduct();
  }


  setProduct() {

    let item = JSON.parse(localStorage.getItem('cart'))
    
    if (item.length > 0) {
      this.products = JSON.parse(localStorage.getItem('cart'));

      this.products.forEach((i, v) => {
        this.granTotal += i.price;
      })
      this.hasResult = true;
    } else {
      this.hasResult = false;
    }
  }

}
