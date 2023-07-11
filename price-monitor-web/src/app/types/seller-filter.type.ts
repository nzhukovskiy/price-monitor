import {SellerType} from "./seller.type";

export type SellerFilterType = {
  [key in SellerType] : boolean;
}
