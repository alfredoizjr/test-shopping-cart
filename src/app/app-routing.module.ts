import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { ProductComponent } from './components/pages/product/product.component';

// main rauter of the app
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '**',   pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
