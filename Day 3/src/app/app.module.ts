import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { BorderCardDirective } from './Directives/border-card.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { ProductOrderComponent } from './components/product-order/product-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    BorderCardDirective,
    USDtoEGPPipe,
    ProductOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
