import {ProductShow} from "../../models/product-show";
import {Product} from "../../models/product";

export interface IProductParser {
  parseProduct(html: string) : ProductShow;
}
