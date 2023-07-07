"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductParserFactory = void 0;
const dns_product_parser_1 = require("../services/product-parsers/dns-product-parser");
const ozon_product_parser_1 = require("../services/product-parsers/ozon-product-parser");
const citilink_product_parser_1 = require("../services/product-parsers/citilink-product-parser");
const aliexpress_product_parser_1 = require("../services/product-parsers/aliexpress-product-parser");
const mvideo_product_parser_1 = require("../services/product-parsers/mvideo-product-parser");
class ProductParserFactory {
    static getParser(seller) {
        switch (seller) {
            case "dns": {
                return new dns_product_parser_1.DnsProductParser();
                break;
            }
            case "ozon": {
                return new ozon_product_parser_1.OzonProductParser();
                break;
            }
            case "citilink": {
                return new citilink_product_parser_1.CitilinkProductParser();
                break;
            }
            case "aliexpress": {
                return new aliexpress_product_parser_1.AliexpressProductParser();
                break;
            }
            case "mvideo": {
                return new mvideo_product_parser_1.MvideoProductParser();
                break;
            }
            default: return null;
        }
    }
}
exports.ProductParserFactory = ProductParserFactory;
//# sourceMappingURL=product-parser-factory.js.map