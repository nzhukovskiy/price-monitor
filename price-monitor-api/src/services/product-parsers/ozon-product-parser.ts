import {ProductParser} from "../../contracts/product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";

export class OzonProductParser extends ProductParser{
    readonly priceSelector = 'div[data-widget="webPrice"] > div > div > div > div > span';
    readonly titleSelector = 'div[data-widget="webProductHeading"] > h1';
    readonly seller = 'ozon';

    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "networkidle0"
        });
        let priceElement = (await page.$(this.priceSelector));
        let price = this.stringHelperService.removeCurrencyAndSpaces(await priceElement.evaluate(x => x.textContent));

        console.log(await browser.userAgent());
        let titleElement = (await page.$(this.titleSelector));
        let title = await titleElement.evaluate(x => x.textContent);
        return <Product>{
            title: title,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}