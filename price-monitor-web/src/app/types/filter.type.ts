import {ProductShow} from "../models/product-show";
import {SellerFilterType} from "./seller-filter.type";

export type FilterType = {
  sorting: {
    order: "asc" | "desc"
    sortingProperty: keyof ProductShow;
  }
  seller: SellerFilterType
}
