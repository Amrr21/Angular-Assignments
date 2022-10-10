import { Injectable } from '@angular/core';
import { MyProduct } from 'src/app/Interface/my-product';

@Injectable({
  providedIn: 'root'
})
export class MyProductsService {
  productsList: MyProduct[];

  constructor() {
    this.productsList = [{
      id: 1,
      name: "Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone",
      price: 1000,
      quantity: 1,
      ImageURL: "https://media.btech.com/media/catalog/product/cache/d90305861bc3b857ca54208b208083e9/e/3/e36b3ccf25b492442be8e0ddc8ec147933eb1dba3746518ef059674778e29930.jpeg",
      categoryID: 1,
    }, {
      id: 2,
      name: "Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone",
      price: 2000,
      quantity: 2,
      ImageURL: "https://m.media-amazon.com/images/I/71320MVSdWL._AC_SX679_.jpg",
      categoryID: 2,
    }, {
      id: 3,
      name: "Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone",
      price: 3000,
      quantity: 3,
      ImageURL: "https://m.media-amazon.com/images/I/71BNkyuemiL._AC_SX679_.jpg",
      categoryID: 3,
    }
    ]
  }

  getAllProducts() {
    return this.productsList
  }

  getProductsByCategory(selectCategoryID: number): MyProduct[] {

    if (selectCategoryID == 0) {
      return this.productsList
    } else {
      return this.productsList.filter(product => product.categoryID == selectCategoryID && selectCategoryID != 0)
    }
  }

  getProductByID(productID: number): MyProduct | null {
    let getProduct = this.productsList.find(product => product.id == productID)
    return getProduct ? getProduct : null
  }

  getProductsIDS(): number[] {
    let productIDS: number[] = this.productsList.map(product => product.id)
    return productIDS
  }
}
