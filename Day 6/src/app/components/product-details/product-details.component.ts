import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyProduct } from 'src/app/Interface/my-product';
import { MyProductsService } from 'src/app/services/my-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedProID: number = 0
  productDetails: MyProduct | null = null
  productsID: number[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private myProducts: MyProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // this.selectedProID = Number(this.activatedRoute.snapshot.paramMap.get("proid"))
    this.productsID = this.myProducts.getProductsIDS()

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.selectedProID = Number(paramMap.get("proid"))
      this.productDetails = this.myProducts.getProductByID(this.selectedProID)

    })

  }

  goBack() {
    this.location.back()
  }

  goPrev() {
    let currentproduct = this.productsID.findIndex((productIndex) => productIndex == this.selectedProID)
    if (currentproduct > 0) {
      let prevProduct = this.productsID[currentproduct - 1]
      this.router.navigate(["/Products", prevProduct])
    }


  }

  goNext() {
    let currentproduct = this.productsID.findIndex((productIndex) => productIndex == this.selectedProID)
    if (currentproduct < this.productsID.length - 1) {
      let nextProduct = this.productsID[currentproduct + 1]
      this.router.navigate(["/Products", nextProduct])
    }

  }
}
