"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitilinkProductParser = void 0;
const product_parser_1 = require("../../contracts/product-parser");
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const app_1 = require("../../app");
class CitilinkProductParser extends product_parser_1.ProductParser {
    constructor() {
        super(...arguments);
        this.priceMatcher = /"price":"[0-9]*"/;
        this.titleSelector = "title";
        this.seller = "citilink";
    }
    parsePrice(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_extra_1.default.launch(app_1.puppeteerOptions);
            const page = yield browser.newPage();
            yield page.goto(link, {
                waitUntil: "domcontentloaded"
            });
            let html = yield page.evaluate(() => document.querySelector('*').outerHTML);
            let priceStr = html.match(this.priceMatcher);
            let price = priceStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 3), this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 4) - 1);
            let titleStr = yield (yield page.$(this.titleSelector)).evaluate(x => x.textContent);
            yield browser.close();
            return {
                title: titleStr,
                price: parseInt(price),
                link: link,
                seller: this.seller
            };
        });
    }
}
exports.CitilinkProductParser = CitilinkProductParser;
//# sourceMappingURL=citilink-product-parser.js.map