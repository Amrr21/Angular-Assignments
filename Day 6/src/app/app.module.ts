import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { BorderCardDirective } from './Directives/border-card.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { ProductOrderComponent } from './components/product-order/product-order.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    BorderCardDirective,
    USDtoEGPPipe,
    ProductOrderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
