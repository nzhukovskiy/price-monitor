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
exports.AliexpressProductParser = void 0;
const product_parser_1 = require("../../contracts/product-parser");
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
class AliexpressProductParser extends product_parser_1.ProductParser {
    parsePrice(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_extra_1.default.launch();
            const page = yield browser.newPage();
            console.log("Aliexpress product parser working");
            yield page.goto(link, {
                waitUntil: "networkidle2"
            });
            console.log('Success');
            let html = yield page.evaluate(() => document.querySelector('*').outerHTML);
            console.log(html);
            let priceElement = yield page.$(".snow-price_SnowPrice__mainM__jlh6el");
            let price = priceElement.evaluate(x => x.textContent);
            console.log(price);
            return Promise.resolve(undefined);
        });
    }
}
exports.AliexpressProductParser = AliexpressProductParser;
//# sourceMappingURL=aliexpress-product-parser.js.map