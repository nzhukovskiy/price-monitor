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
exports.MvideoProductParser = void 0;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
class MvideoProductParser {
    constructor() {
        this.seller = "mvideo";
    }
    parsePrice(link) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Mvideo parser working");
            const browser = yield puppeteer_extra_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto(link, {
                waitUntil: "networkidle0"
            });
            let priceElement = yield page.$(".price__main-value");
            let price = (yield priceElement.evaluate(x => x.textContent))
                .replace(/\s/g, '').replace("₽", "");
            let title = yield (yield page.$(".title-brand > .title")).evaluate(x => x.textContent);
            return {
                title: title,
                price: parseInt(price),
                link: yield page.evaluate(() => document.location.href),
                seller: this.seller
            };
        });
    }
}
exports.MvideoProductParser = MvideoProductParser;
//# sourceMappingURL=mvideo-product-parser.js.map