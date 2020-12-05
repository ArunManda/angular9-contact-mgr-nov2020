import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

// configure routes
const routes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering routes
  ]
})
export class ProductsRoutingModule { }
