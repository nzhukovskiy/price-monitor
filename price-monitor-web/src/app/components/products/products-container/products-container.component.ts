import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {ProductShow} from "../../../models/product-show";
import {BehaviorSubject, forkJoin, Observable, Subscription, tap} from "rxjs";
import {FilterType} from "../../../types/filter.type";
import {C} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnChanges {
  products: ProductShow[] = [];
  productsLoaded = new BehaviorSubject(false);
  @Input() link?: string;
  @Input() filters?: FilterType;

  constructor(private readonly productService: ProductService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["link"].previousValue !== changes["link"].currentValue) {
      this.loadProducts();
    }
  }

  private loadProducts() {
    this.productsLoaded.next(false);
    this.products = [];
    this.productService.getProducts(this.link!).subscribe(result => {
      let subscriptions: Observable<any> [] = [];
      result.forEach(el => {
        subscriptions.push(this.productService.parseProduct(el).pipe(tap(result => this.products.push(result))));
      });
      forkJoin(subscriptions).subscribe().add(() => this.productsLoaded.next(true));
    });
  }
}
