import { Injectable } from '@angular/core';
import {IProductParser} from "../../contracts/i-product-parser";
import {ProductShow} from "../../../models/product-show";
import {Product} from "../../../models/product";

@Injectable({
  providedIn: 'root'
})
export class OzonProductParserService implements IProductParser{

  constructor() { }

  parseProduct(html: string): ProductShow {
    let parser = new DOMParser();
    let s = parser.parseFromString(html, "text/html");
    console.log(s);
    return {
      title: 'Xiaomi mi 6',
      link: 'flgjhgklukkuhsdf',
      price: 37847584,
      seller: 'ozon'
    } as ProductShow;
  }
}
