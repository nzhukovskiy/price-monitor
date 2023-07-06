import { Injectable } from '@angular/core';
import {Product} from "../../models/product";
import {SellerType} from "../../types/seller.type";
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import {environment} from "../../../environments/environment.development";
import {flatMap, map, switchMap} from "rxjs";
import {OzonProductParserService} from "../product-parsers/ozon-product-parser/ozon-product-parser.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) { }

  getProducts() {
    this.httpClient.get<string[]>(environment.linksUrl)
      .subscribe(data => {
        let products = data.map(x => {
          let parser = new OzonProductParserService();
          this.httpClient.get(`https://api.codetabs.com/v1/proxy?quest=${x}`,
            {responseType: 'text' as const})
            .subscribe(result => {
              console.log(`https://api.codetabs.com/v1/proxy?quest=${x}`);
              parser.parseProduct(result as string);
            });
        });
      });
  }
}
