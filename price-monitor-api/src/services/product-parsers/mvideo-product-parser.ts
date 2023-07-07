import {IProductParser} from "../../contracts/i-product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";

export class MvideoProductParser implements IProductParser {
    private readonly seller = "mvideo";
    async parsePrice(link: string): Promise<Product> {
        console.log("Mvideo parser working");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link, {
            waitUntil: "networkidle0"
        });
        let priceElement = await page.$(".price__main-value");
        let price = (await priceElement.evaluate(x => x.textContent))
            .replace(/\s/g, '').replace("₽", "");

        let title = await (await page.$(".title-brand > .title")).evaluate(x => x.textContent);
        return <Product>{
            title: title,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}