import {ProductParser} from "../../contracts/product-parser";
import {Product} from "../../models/product";
import {Page} from "puppeteer";
import puppeteer from "puppeteer-extra";
import {StringHelperService} from "../string-helper.service";
import {puppeteerOptions} from "../../app";

export class DnsProductParser extends ProductParser {
    readonly priceSelector = '.product-buy__price';
    readonly titleSelector = '.product-card-top__title';
    readonly seller = 'dns';
    
    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch(puppeteerOptions);
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "networkidle0"
        });
        const priceElement = await page.waitForSelector(this.priceSelector);
        let price = this.stringHelperService.removeCurrencyAndSpaces(await priceElement?.evaluate(el => el.textContent));

        const titleElement = await page.waitForSelector(this.titleSelector);
        const title = await titleElement?.evaluate(el => el.textContent);
        await browser.close();
        return <Product>{
            title: title,
            price: parseInt(price),
            link: link,
            seller: this.seller
        };
    }

}