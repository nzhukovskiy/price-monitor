import {ProductParser} from "../contracts/product-parser";
import puppeteer from "puppeteer-extra";
import {DnsProductParser} from "./product-parsers/dns-product-parser";
import express = require('express');
import {Product} from "../models/product";

export class ProductsService {

    /*async parseProduct(link: string, productParser: IProductParser): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        console.log("Going to page", link);

        return await productParser.parsePrice(page);
    }*/
}