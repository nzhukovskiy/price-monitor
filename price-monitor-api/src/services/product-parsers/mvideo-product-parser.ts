import {ProductParser} from "../../contracts/product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";
import {StringHelperService} from "../string-helper.service";

export class MvideoProductParser extends ProductParser {
    private readonly seller = "mvideo";
    private readonly priceSelector = ".price__main-value";
    private readonly titleSelector = ".title-brand > .title";
    
    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "networkidle0"
        });
        let priceElement = await page.$(this.priceSelector);
        let price = this.stringHelperService.removeCurrencyAndSpaces(await priceElement.evaluate(x => x.textContent));

        let title = await (await page.$(this.titleSelector)).evaluate(x => x.textContent);
        return <Product>{
            title: title,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}