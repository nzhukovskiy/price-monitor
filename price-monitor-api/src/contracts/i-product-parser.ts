import {Product} from "../models/product";
import {Page} from "puppeteer";

export interface IProductParser {
    parsePrice(html: Page) : Promise<Product>;
}