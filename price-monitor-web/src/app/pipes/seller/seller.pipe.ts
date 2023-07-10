import { Pipe, PipeTransform } from '@angular/core';
import {SellerType} from "../../types/seller.type";
import {ProductShow} from "../../models/product-show";

@Pipe({
  name: 'seller'
})
export class SellerPipe implements PipeTransform {

  transform(products: ProductShow[], seller: SellerType, ...args: unknown[]) {
    return products.filter(x => x.seller == seller);
  }

}
