import { Pipe, PipeTransform } from '@angular/core';
import {ProductShow} from "../../models/product-show";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: ProductShow[], sortingProperty: keyof ProductShow, order: 'asc' | 'desc') {
    return products.sort((a, b) => {
      if (a[sortingProperty] > b[sortingProperty]) {
        return order == 'asc' ? 1 : -1;
      }
      else if (a[sortingProperty] < b[sortingProperty]) {
        return order == 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

}
