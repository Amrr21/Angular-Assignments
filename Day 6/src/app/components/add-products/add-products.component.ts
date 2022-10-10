import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCategory } from 'src/app/Interface/my-category';
import { MyProduct } from 'src/app/Interface/my-product';
import { APIProductsService } from 'src/app/services/apiproducts.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  categoryList: MyCategory[];
  newProduct: MyProduct = {} as MyProduct
  constructor(private apiService: APIProductsService, private route: Router) {
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

  addProduct() {

    const observer = {
      next: (product: MyProduct) => {
        alert("added succesfully"),
          this.route.navigateByUrl("/Products")
      },
      error: (err: Error) => { alert(err.message) }
    }
    this.apiService.addProduct(this.newProduct).subscribe(observer)
  }
}
