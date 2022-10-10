import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MyCategory } from 'src/app/Interface/my-category';
import { MyProduct } from 'src/app/Interface/my-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
  productsList: MyProduct[];
  totalPrice: number = 0;
  orderTime: Date;
  productFilterCateg: MyProduct[] = [];
  @Input() selectCategoryIDChild: number = 0;
  @Output() totalEv: EventEmitter<number>;
  constructor() {
    this.orderTime = new Date();
    this.productsList = [
      {
        id: 1,
        name: 'Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone',
        price: 800,
        quantity: 1,
        ImageURL:
          'https://media.btech.com/media/catalog/product/cache/d90305861bc3b857ca54208b208083e9/e/3/e36b3ccf25b492442be8e0ddc8ec147933eb1dba3746518ef059674778e29930.jpeg',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone',
        price: 600,
        quantity: 20,
        ImageURL:
          'https://m.media-amazon.com/images/I/71320MVSdWL._AC_SX679_.jpg',
        categoryID: 2,
      },
      {
        id: 3,
        name: 'Redmagic Global Version 7 Dual Sim, 18GB Ram, 256GB, Supernova Phone',
        price: 500,
        quantity: 30,
        ImageURL:
          'https://m.media-amazon.com/images/I/71BNkyuemiL._AC_SX679_.jpg',
        categoryID: 3,
      },
    ];
    this.totalEv = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  buy(productPrice: number, count: string, quantity: number) {
    if (+count > 0 && quantity >= 1) {
      this.totalPrice += productPrice * +count;
      this.totalEv.emit(this.totalPrice);
      quantity -= +count;
      console.log(quantity);
    } else if (quantity < +count) {
      alert('You cant buy more than the available quantity');
    } else {
      alert('you should buy with postive value ');
    }
  }
  ngOnChanges(): void {
    this.filterCateg();
  }

  filterCateg() {
    if (this.selectCategoryIDChild == 0) {
      this.productFilterCateg = this.productsList;
    } else {
      this.productFilterCateg = this.productsList.filter(
        (product) =>
          product.categoryID == this.selectCategoryIDChild &&
          this.selectCategoryIDChild != 0
      );
    }
  }
}
