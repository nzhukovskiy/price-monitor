"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductParserFactory = void 0;
const dns_product_parser_1 = require("../services/product-parsers/dns-product-parser");
const ozon_product_parser_1 = require("../services/product-parsers/ozon-product-parser");
const citilink_product_parser_1 = require("../services/product-parsers/citilink-product-parser");
const aliexpress_product_parser_1 = require("../services/product-parsers/aliexpress-product-parser");
const mvideo_product_parser_1 = require("../services/product-parsers/mvideo-product-parser");
class ProductParserFactory {
    static getParser(seller, stringHelperService) {
        switch (seller) {
            case "dns": {
                return new dns_product_parser_1.DnsProductParser(stringHelperService);
            }
            case "ozon": {
                return new ozon_product_parser_1.OzonProductParser(stringHelperService);
            }
            case "citilink": {
                return new citilink_product_parser_1.CitilinkProductParser(stringHelperService);
            }
            case "aliexpress": {
                return new aliexpress_product_parser_1.AliexpressProductParser(stringHelperService);
            }
            case "mvideo": {
                return new mvideo_product_parser_1.MvideoProductParser(stringHelperService);
            }
            default: throw new Error("Unknown seller");
        }
    }
}
exports.ProductParserFactory = ProductParserFactory;
//# sourceMappingURL=product-parser-factory.js.map