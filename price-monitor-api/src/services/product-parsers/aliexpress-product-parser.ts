import {IProductParser} from "../../contracts/i-product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";

export class AliexpressProductParser implements IProductParser {
    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log("Aliexpress product parser working");
        await page.goto(link, {
            waitUntil: "networkidle2"
        });

        console.log('Success');
        let html = await page.evaluate(() => document.querySelector('*').outerHTML);
        let priceElement = await page.$(".snow-price_SnowPrice__mainM__jlh6el");
        let price = priceElement.evaluate(x => x.textContent);
        console.log(price);
        return Promise.resolve(undefined);
    }

}