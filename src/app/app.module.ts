import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/pages/home/home.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { CardComponent } from './components/shared/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchComponent } from './components/shared/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/pages/product/product.component';
import { QtyComponent } from './components/shared/qty/qty.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    CardComponent,
    LoadingComponent,
    SearchComponent,
    ProductComponent,
    QtyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
