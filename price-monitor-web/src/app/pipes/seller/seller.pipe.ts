import { Pipe, PipeTransform } from '@angular/core';
import {ProductShow} from "../../models/product-show";
import {SellerFilterType} from "../../types/seller-filter.type";

@Pipe({
  name: 'seller',
  pure: false
})
export class SellerPipe implements PipeTransform {

  transform(products: ProductShow[], sellerFilters: SellerFilterType) {
    let seller : keyof SellerFilterType;
    let filteredProducts: ProductShow[] = [];
    for (seller in sellerFilters) {
      if (sellerFilters[seller]) {
        filteredProducts = filteredProducts.concat(products.filter(x => x.seller === seller));
      }
    }
    return filteredProducts;
  }

}
