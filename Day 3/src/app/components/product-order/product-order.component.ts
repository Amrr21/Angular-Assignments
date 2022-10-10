import { Component, OnInit } from '@angular/core';
import { MyCategory } from 'src/app/Interface/my-category';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {
  categoryList: MyCategory[];
  selectedCategoryID: number = 0;
  RecivedTotal: number = 0

  constructor() {
    this.categoryList = [
      { id: 1, name: "Laptops" },
      { id: 2, name: "Tablets" },
      { id: 3, name: "Mobiles" }
    ]
  }
  ngOnInit(): void {
  }

  changedPrice(total: number): void {
    this.RecivedTotal = total
  }
}
