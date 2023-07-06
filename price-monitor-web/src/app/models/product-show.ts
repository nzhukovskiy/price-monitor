import {SellerType} from "../types/seller.type";
import {Product} from "./product";

export interface ProductShow extends Product {
  title: string;
  price: number;
  seller: SellerType;
}
