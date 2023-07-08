import {Product} from "../models/product";
import {Page} from "puppeteer";
import {StringHelperService} from "../services/string-helper.service";

export abstract class ProductParser {
    abstract parsePrice(link: string) : Promise<Product>;
    protected readonly stringHelperService: StringHelperService;
    constructor(stringHelperService: StringHelperService) {
        this.stringHelperService = stringHelperService;
    }
}