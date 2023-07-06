import { Component } from '@angular/core';
import {Product} from "../../../models/product";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent {
  products: Product[] = [];
  constructor(private readonly productService: ProductService) {
    this.productService.getProducts();
  }
}
