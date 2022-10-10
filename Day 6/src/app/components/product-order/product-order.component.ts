import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyCategory } from 'src/app/Interface/my-category';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit, AfterViewInit {
  categoryList: MyCategory[];
  selectedCategoryID: number = 0;
  RecivedTotal: number = 0

  @ViewChild("userName") userName !: ElementRef
  @ViewChild(ProductsComponent) productListComp !: ProductsComponent
  constructor() {

    this.categoryList = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Tablets" },
      { id: 3, name: "Mobiles" },
      { id: 4, name: "category 4" },
      { id: 5, name: "category 5" },
      { id: 6, name: "category 6" },
      { id: 7, name: "category 7" },
      { id: 8, name: "category 8" },
      { id: 9, name: "category 9" },
      { id: 10, name: "category 10" },

    ]

  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.userName.nativeElement.value = "Enter your user Name"
    this.userName.nativeElement.style.border = "2px solid blue"

  }
  changedPrice(total: number): void {
    this.RecivedTotal = total
  }
}
