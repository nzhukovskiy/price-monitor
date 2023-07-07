import {Product} from "../models/product";
import {Page} from "puppeteer";

export interface IProductParser {
    parsePrice(link: string) : Promise<Product>;
}