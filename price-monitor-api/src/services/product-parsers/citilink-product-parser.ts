import {ProductParser} from "../../contracts/product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";
import {StringHelperService} from "../string-helper.service";

export class CitilinkProductParser extends ProductParser {
    private readonly priceMatcher = /"price":"[0-9]*"/;
    private readonly titleSelector = "title";
    private readonly seller = "citilink";
    
    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "domcontentloaded"
        });

        console.log('Success');
        let html = await page.evaluate(() => document.querySelector('*').outerHTML);
        let priceStr = html.match(this.priceMatcher);
        let price = priceStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 3),
            this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 4) - 1);
        
        let titleStr = await (await page.$(this.titleSelector)).evaluate(x => x.textContent);
        return <Product>{
            title: titleStr,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}