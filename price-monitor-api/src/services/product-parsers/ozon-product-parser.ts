import {IProductParser} from "../../contracts/i-product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";

export class OzonProductParser implements IProductParser{
    readonly priceSelector = '.product-buy__price';
    readonly titleSelector = '.product-card-top__title';
    readonly seller = 'ozon';

    async parsePrice(link: string): Promise<Product> {
        console.log("Ozon parser working");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "networkidle0"
        });
        let priceElement = (await page.$('div[data-widget="webPrice"] > div > div > div > div > span'));
        let price = (await priceElement.evaluate(x => x.textContent))
            .replace(/\s/g, '')
            .replace("₽", "");

        let titleElement = (await page.$('div[data-widget="webProductHeading"] > h1'));
        let title = await titleElement.evaluate(x => x.textContent);
        return <Product>{
            title: title,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}