import {IProductParser} from "../../contracts/i-product-parser";
import {Page} from "puppeteer";
import {Product} from "../../models/product";
import puppeteer from "puppeteer-extra";
import {StringHelperService} from "../string-helper.service";

export class CitilinkProductParser implements IProductParser {
    private readonly stringHelperService = new StringHelperService();
    private readonly priceSelector = ".PriceBlock__price";
    private readonly titleSelector = ".ProductHeaderLayout__title";
    private readonly seller = "citilink";

    async parsePrice(link: string): Promise<Product> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        console.log("Citilink product parser working");
        await page.goto(link, {
            waitUntil: "domcontentloaded"
        });

        console.log('Success');
        let html = await page.evaluate(() => document.querySelector('*').outerHTML);
        let priceStr = html.match(/"price":"[0-9]*"/);
        let price = priceStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 3),
            this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 4) - 1);
        //price = price.slice(0, price.indexOf('₽')).replace(' ', '');

        //"id":"1936330","name":
        //html = await page.evaluate(() => document.querySelector('*').outerHTML);
        let titleStr = await (await page.$("title")).evaluate(x => x.textContent);
        /*console.log(titleStr);
        let titleStr = html.match(/"id":"[0-9]*","name":"[A-ZА-Яa-zа-я0-9 ]*"/);
        let title = titleStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 9),
            this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 10) - 1);*/
        return <Product>{
            title: titleStr,
            price: parseInt(price),
            link: await page.evaluate(() => document.location.href),
            seller: this.seller
        };
    }

}