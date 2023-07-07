"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OzonProductParser = void 0;
class OzonProductParser {
    constructor() {
        this.priceSelector = '.product-buy__price';
        this.titleSelector = '.product-card-top__title';
        this.seller = 'dns';
    }
    parsePrice(html) {
        console.log("Ozon parser working");
        return Promise.resolve(undefined);
    }
}
exports.OzonProductParser = OzonProductParser;
//# sourceMappingURL=ozon-product-parser.js.map