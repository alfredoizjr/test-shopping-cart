import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public products: Products[] = [];
  public loading: boolean = true;
  public queryFiltered: Products[] = [];
  public curPage: number;
  public pageSize: number;
  public subcribe: Subscription

  constructor(private productsServ: ProductsService) { }

  ngOnInit() {
    // subcribe to the observable to get the data and print it
    this.subcribe = this.productsServ.getProducts()
      .subscribe((data: Products[]) => {
        this.loading = false;
        this.queryFiltered = this.products = data;
      });
    this.curPage = 1;
    this.pageSize = 10;
  }

  // filter the data if user enter a search parameter
  getResultOfSearch(query: string) {
    this.queryFiltered = this.productsServ.setResultOfFiltered(query, this.products);
  }

  ngOnDestroy() {
    // unsubcribe to prevent memory leak
    this.subcribe.unsubscribe();
  }


}
