import {Component, Input} from '@angular/core';
import {ProductShow} from "../../../models/product-show";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  @Input() product?: ProductShow;
  protected readonly window = window;
}
