import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';

const routes: Routes = [
  { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: "Home", component: HomeComponent },
  { path: "Products", component: ProductsComponent },
  { path: "Products/add", component: AddProductsComponent },
  { path: "Products/:proid", component: ProductDetailsComponent },
  { path: "Order", component: ProductOrderComponent },
  { path: "**", component: NotFoundComponent },
  { path: "Login", component: HomeComponent },
  { path: "Logout", component: HomeComponent },


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
