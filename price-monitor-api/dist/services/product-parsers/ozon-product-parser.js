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
exports.OzonProductParser = void 0;
const product_parser_1 = require("../../contracts/product-parser");
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
class OzonProductParser extends product_parser_1.ProductParser {
    constructor() {
        super(...arguments);
        this.priceSelector = 'div[data-widget="webPrice"] > div > div > div > div > span';
        this.titleSelector = 'div[data-widget="webProductHeading"] > h1';
        this.seller = 'ozon';
    }
    parsePrice(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_extra_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto(link, {
                waitUntil: "networkidle0"
            });
            let priceElement = (yield page.$(this.priceSelector));
            let price = this.stringHelperService.removeCurrencyAndSpaces(yield priceElement.evaluate(x => x.textContent));
            console.log(yield browser.userAgent());
            let titleElement = (yield page.$(this.titleSelector));
            let title = yield titleElement.evaluate(x => x.textContent);
            return {
                title: title,
                price: parseInt(price),
                link: yield page.evaluate(() => document.location.href),
                seller: this.seller
            };
        });
    }
}
exports.OzonProductParser = OzonProductParser;
//# sourceMappingURL=ozon-product-parser.js.map