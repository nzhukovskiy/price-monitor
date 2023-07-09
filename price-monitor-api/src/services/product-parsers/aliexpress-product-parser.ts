import {ProductParser} from "../../contracts/product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";

export class AliexpressProductParser extends ProductParser {
    private readonly priceSelector = ".snow-price_SnowPrice__mainM__jlh6el";
    private readonly titleSelector = "h1";
    private readonly userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";
    
    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setUserAgent(this.userAgent);
        console.log("Aliexpress product parser working");
        await page.goto(link, {
            waitUntil: "networkidle2"
        });

        console.log('Success');
        let html = await page.evaluate(() => document.querySelector('*').outerHTML);
        console.log(html);
        let priceElement = await page.$(this.priceSelector);
        let price = await priceElement.evaluate(x => x.textContent);
        let titleElement = await page.$(this.titleSelector);
        let title = await titleElement.evaluate(x => x.textContent);
        console.log(price, title);
        return Promise.resolve(undefined);
    }

}