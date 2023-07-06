import {IProductParser} from "../contracts/i-product-parser";
import puppeteer from "puppeteer-extra";
import {DnsProductParser} from "./dns-product-parser";
import express = require('express');
import {Product} from "../models/product";

export class ProductsService {

    async parseProduct(link: string, productParser: IProductParser): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(link, {
            waitUntil: "networkidle0"
        });

        let bodyHTML = await page.evaluate(() =>  document.documentElement.outerHTML);
        return await productParser.parsePrice(page);
    }
}