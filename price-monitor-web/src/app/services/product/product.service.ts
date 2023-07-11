import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {ProductShow} from "../../models/product-show";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly httpClient: HttpClient) { }

  getProducts(fileLink: string) {
    return this.httpClient.get<string[]>(`${environment.apiBaseUrl}get?link=${fileLink}`);
  }

  parseProduct(link: string) {
    return this.httpClient.get<ProductShow>(`${environment.apiBaseUrl}parse?link=${link}`);
  }
}
