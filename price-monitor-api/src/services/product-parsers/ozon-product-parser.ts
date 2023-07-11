import {ProductParser} from "../../contracts/product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";
import {puppeteerOptions} from "../../app";

export class OzonProductParser extends ProductParser{
    readonly priceSelector = 'div[data-widget="webPrice"] > div > div > div > div > span';
    readonly titleSelector = 'div[data-widget="webProductHeading"] > h1';
    readonly seller = 'ozon';

    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch(puppeteerOptions);
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "networkidle0"
        });
        let priceElement = (await page.$(this.priceSelector));
        let price = this.stringHelperService.removeCurrencyAndSpaces(await priceElement.evaluate(x => x.textContent));
        let titleElement = (await page.$(this.titleSelector));
        let title = await titleElement.evaluate(x => x.textContent);
        await browser.close();
        return <Product>{
            title: title,
            price: parseInt(price),
            link: link,
            seller: this.seller
        };
    }

}