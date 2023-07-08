import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {ProductShow} from "../../../models/product-show";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  products: ProductShow[] = [];
  productsStrs: string[] = [];
  constructor(private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => {
      this.productsStrs = result;
      this.productsStrs.forEach(el => {
        this.productService.parseProduct(el).subscribe(res => {
          this.products.push(res);
        });
      });
    });
  }
}
