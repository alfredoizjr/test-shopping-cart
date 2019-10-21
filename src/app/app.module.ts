import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// components
import {
  HomeComponent,
  CartComponent,
  ProductComponent
} from "./components/pages/index.pages.module";
import {
  NavbarComponent,
  CardComponent,
  LoadingComponent,
  SearchComponent
} from "./components/shared/index.shared.module";
import { AppComponent } from "./app.component";

// modules
import { FormsModule } from "@angular/forms";
import { NotifierModule } from "angular-notifier";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// services
import { ProductsService } from "./services/products.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    CardComponent,
    LoadingComponent,
    SearchComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
