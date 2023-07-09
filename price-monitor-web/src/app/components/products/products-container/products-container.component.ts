import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {ProductShow} from "../../../models/product-show";
import {BehaviorSubject, forkJoin, Observable, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit, OnChanges {
  products: ProductShow[] = [];
  productsLoaded = new BehaviorSubject(false);
  @Input() link?: string;

  constructor(private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProducts(this.link!).subscribe(result => {
      let subscriptions: Observable<any> [] = [];
      result.forEach(el => {
        subscriptions.push(this.productService.parseProduct(el).pipe(tap(result => this.products.push(result))));
      });
      forkJoin(subscriptions).subscribe().add(() => this.productsLoaded.next(true));
    });
  }
}
