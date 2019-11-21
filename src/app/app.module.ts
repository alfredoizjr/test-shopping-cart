import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import {
  HomeComponent,
  CartComponent,
  ProductComponent
} from './components/pages/index.pages.module';
import {
  NavbarComponent,
  CardComponent,
  LoadingComponent,
  SearchComponent
} from './components/shared/index.shared.module';
import { AppComponent } from './app.component';

// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// services
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { AddDvdDialogComponent } from './components/shared/add-dvd-dialog/add-dvd-dialog.component';

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
    AddDvdDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NotifierModule,
    ReactiveFormsModule
  ],
  entryComponents: [AddDvdDialogComponent],
  exports: [AddDvdDialogComponent],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
