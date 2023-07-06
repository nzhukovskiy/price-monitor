import {IProductParser} from "../contracts/i-product-parser";
import {Product} from "../models/product";
import {Page} from "puppeteer";

export class DnsProductParser implements IProductParser {
    async parsePrice(html: Page): Promise<Product> {
        const priceSelector = '.product-buy__price';
        const priceElement = await html.waitForSelector(priceSelector);
        let price = await priceElement?.evaluate(el => el.textContent);
        price = price.slice(0, price.indexOf('₽')).replace(' ', '');

        const titleSelector = '.product-card-top__title';
        const titleElement = await html.waitForSelector(titleSelector);
        const title = await titleElement?.evaluate(el => el.textContent);
        return <Product>{
            title: title,
            price: parseInt(price),
            link: await html.evaluate(() => document.location.href),
            seller: 'dns'
        };
    }

}