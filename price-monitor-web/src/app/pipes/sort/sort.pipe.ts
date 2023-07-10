import { Pipe, PipeTransform } from '@angular/core';
import {ProductShow} from "../../models/product-show";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: ProductShow[], sortingAttr: keyof ProductShow, order: 'asc' | 'desc') {
    return products.sort((a, b) => {
      if (a[sortingAttr] > b[sortingAttr]) {
        return order == 'asc' ? 1 : -1;
      }
      else if (a[sortingAttr] < b[sortingAttr]) {
        return order == 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

}
