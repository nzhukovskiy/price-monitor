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
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const string_helper_service_1 = require("../string-helper.service");
class CitilinkProductParser {
    constructor() {
        this.stringHelperService = new string_helper_service_1.StringHelperService();
        this.priceSelector = ".PriceBlock__price";
        this.titleSelector = ".ProductHeaderLayout__title";
        this.seller = "citilink";
    }
    parsePrice(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_extra_1.default.launch();
            const page = yield browser.newPage();
            console.log("Citilink product parser working");
            yield page.goto(link, {
                waitUntil: "domcontentloaded"
            });
            console.log('Success');
            let html = yield page.evaluate(() => document.querySelector('*').outerHTML);
            let priceStr = html.match(/"price":"[0-9]*"/);
            let price = priceStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 3), this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 4) - 1);
            //price = price.slice(0, price.indexOf('₽')).replace(' ', '');
            //"id":"1936330","name":
            //html = await page.evaluate(() => document.querySelector('*').outerHTML);
            let titleStr = yield (yield page.$("title")).evaluate(x => x.textContent);
            /*console.log(titleStr);
            let titleStr = html.match(/"id":"[0-9]*","name":"[A-ZА-Яa-zа-я0-9 ]*"/);
            let title = titleStr["0"].slice(this.stringHelperService.getNthSubstrPos(priceStr["0"], '"', 9),
                this.stringHelperService.getNthSubstrPos(priceStr["0"], '\"', 10) - 1);*/
            return {
                title: titleStr,
                price: parseInt(price),
                link: yield page.evaluate(() => document.location.href),
                seller: this.seller
            };
        });
    }
}
exports.CitilinkProductParser = CitilinkProductParser;
//# sourceMappingURL=citilink-product-parser.js.map