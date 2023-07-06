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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnsProductParser = void 0;
class DnsProductParser {
    parsePrice(html) {
        return __awaiter(this, void 0, void 0, function* () {
            const priceSelector = '.product-buy__price';
            const priceElement = yield html.waitForSelector(priceSelector);
            let price = yield (priceElement === null || priceElement === void 0 ? void 0 : priceElement.evaluate(el => el.textContent));
            price = price.slice(0, price.indexOf('₽')).replace(' ', '');
            const titleSelector = '.product-card-top__title';
            const titleElement = yield html.waitForSelector(titleSelector);
            const title = yield (titleElement === null || titleElement === void 0 ? void 0 : titleElement.evaluate(el => el.textContent));
            return {
                title: title,
                price: parseInt(price),
                link: yield html.evaluate(() => document.location.href),
                seller: 'dns'
            };
        });
    }
}
exports.DnsProductParser = DnsProductParser;
//# sourceMappingURL=dns-product-parser.js.map