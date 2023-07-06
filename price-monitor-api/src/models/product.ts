import {SellerType} from "../types/seller.type";

export interface Product {
    title: string;
    link: string;
    price: number;
    seller: SellerType;
}