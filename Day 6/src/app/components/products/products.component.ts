import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCategory } from 'src/app/Interface/my-category';
import { MyProduct } from 'src/app/Interface/my-product';
import { APIProductsService } from 'src/app/services/apiproducts.service';
import { MyProductsService } from 'src/app/services/my-products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  totalPrice: number = 0
  orderTime: Date
  productFilterCateg: MyProduct[] = []

  @Input() selectCategoryIDChild: number = 0
  @Output() totalEv: EventEmitter<number>



  constructor(private MyProductsService: MyProductsService,
    private apiservice: APIProductsService,

    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.orderTime = new Date
    this.totalEv = new EventEmitter<number>()

  }

  ngOnInit(): void {
    this.apiservice.getAllProducts().subscribe(product => {
      this.productFilterCateg = product
    })
    // this.productFilterCateg = this.MyProductsService.getAllProducts()
  }

  buy(productPrice: number, count: string, quantity: number) {
    if (+count > 0 && quantity >= 1) {
      this.totalPrice += productPrice * +count
      this.totalEv.emit(this.totalPrice)
      quantity -= +count
      console.log(quantity)
    }
    else if (quantity < +count) {
      alert("You cant buy more than the available quantity")
    }
    else {
      alert("you should buy with postive value ")
    }
  }
  ngOnChanges(): void {
    // this.productFilterCateg = this.MyProductsService.getProductsByCategory(this.selectCategoryIDChild)
    this.apiservice.getCateg(this.selectCategoryIDChild).subscribe(product => {
      this.productFilterCateg = product
    })
  }
  productDetails(proid: any) {
    this.router.navigate(["/Products", proid])
  }


}
