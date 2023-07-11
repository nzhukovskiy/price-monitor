import {ProductParser} from "../../contracts/product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";
import {StringHelperService} from "../string-helper.service";
import {puppeteerOptions} from "../../app";

export class CitilinkProductParser extends ProductParser {
    private readonly priceMatcher = /"price":"[0-9]*"/;
    private readonly titleSelector = "title";
    private readonly seller = "citilink";
    
    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch(puppeteerOptions);
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "domcontentloaded"
        });
        let html = await page.evaluate(() => document.querySelector('*').outerHTML);
        let priceStr = html.match(this.priceMatcher);
        let price = priceStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 3),
            this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 4) - 1);
        
        let titleStr = await (await page.$(this.titleSelector)).evaluate(x => x.textContent);
        await browser.close();
        return <Product>{
            title: titleStr,
            price: parseInt(price),
            link: link,
            seller: this.seller
        };
    }

}