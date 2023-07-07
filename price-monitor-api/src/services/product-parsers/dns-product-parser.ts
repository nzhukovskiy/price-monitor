import {IProductParser} from "../../contracts/i-product-parser";
import {Product} from "../../models/product";
import {Page} from "puppeteer";
import puppeteer from "puppeteer-extra";

export class DnsProductParser implements IProductParser {
    readonly priceSelector = '.product-buy__price';
    readonly titleSelector = '.product-card-top__title';
    readonly seller = 'dns';

    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log("Dns product parser working");
        await page.goto(link, {
            waitUntil: "networkidle0"
        });

        console.log('Success');

        const priceElement = await page.waitForSelector(this.priceSelector);
        let price = await priceElement?.evaluate(el => el.textContent);
        price = price.slice(0, price.indexOf('₽')).replace(' ', '');

        const titleElement = await page.waitForSelector(this.titleSelector);
        const title = await titleElement?.evaluate(el => el.textContent);
        return <Product>{
            title: title,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}