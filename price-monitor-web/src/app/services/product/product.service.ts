import { Injectable } from '@angular/core';
import {Product} from "../../models/product";
import {SellerType} from "../../types/seller.type";
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../../../environments/environment.development";
import {flatMap, map, switchMap} from "rxjs";
import {OzonProductParserService} from "../product-parsers/ozon-product-parser/ozon-product-parser.service";
import {ProductShow} from "../../models/product-show";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) { }

  getProducts(fileLink: string) {
    return this.httpClient.get<string[]>(fileLink);
  }

  parseProduct(link: string) {
    return this.httpClient.get<ProductShow>(`${environment.apiBaseUrl}parse?link=${link}`);
  }
}
