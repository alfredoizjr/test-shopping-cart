import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../../services/products.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  public products: any[] = [];
  public granTotal: Number = 0;
  public hasResult = false;
  public newQty: number = 0;
  constructor(private productServ: ProductsService) {}

  ngOnInit() {
    this.setProduct();
  }

  removeItem(id: any) {
    this.productServ.removeItem(id);
    this.setProduct();
  }

  setProduct() {
    let item = JSON.parse(localStorage.getItem("cart"));

    if (item.length > 0) {
      this.products = JSON.parse(localStorage.getItem("cart"));
      this.granTotal = 0;
      this.products.forEach((i) => {
        this.granTotal += i.price;
      });
      this.hasResult = true;
    } else {
      this.hasResult = false;
    }
  }

  updateQty(value: any, product: any) {
    let currenData = JSON.parse(localStorage.getItem("cart"));
    currenData.forEach(element => {
      if (element.id === product.id) {
        element.qty = value;
        element.price =  element.price * element.qty;
      }
    });

    // update the localstorae with the new qty
    localStorage.removeItem('cart');
    localStorage.setItem('cart',JSON.stringify(currenData));
    //reset the product list
    this.setProduct();

  }
}
