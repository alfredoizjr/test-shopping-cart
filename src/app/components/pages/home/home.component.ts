import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public products: any[] = [];
  public loading: boolean = true;
  public queryFiltered: any[] = [];
  public curPage: number;
  public pageSize: number;
  public subcribe: Subscription

  constructor(private productsServ: ProductsService) { }

  ngOnInit() {
    // subcribe to the observable to get the data and print it
    this.subcribe = this.productsServ.getProducts().subscribe((data: any) => {
      this.loading = false;
      this.queryFiltered = this.products = data
    });
    this.curPage = 1;
    this.pageSize = 10;
  }

  numberOfPages() {
    return Math.ceil(this.products.length / this.pageSize);
  }

  // filter the data if user enter a search parameter
  getResultOfSearch(query: string) {

    this.queryFiltered = (query) ? this.products.filter( p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;

  }

  ngOnDestroy() {
    // unsubcribe to prevent memory leak
    this.subcribe.unsubscribe();
  }


}
