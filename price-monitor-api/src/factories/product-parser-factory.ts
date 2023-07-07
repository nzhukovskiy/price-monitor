import {SellerType} from "../types/seller.type";
import {IProductParser} from "../contracts/i-product-parser";
import {DnsProductParser} from "../services/product-parsers/dns-product-parser";
import {OzonProductParser} from "../services/product-parsers/ozon-product-parser";
import {CitilinkProductParser} from "../services/product-parsers/citilink-product-parser";
import {AliexpressProductParser} from "../services/product-parsers/aliexpress-product-parser";
import {MvideoProductParser} from "../services/product-parsers/mvideo-product-parser";

export class ProductParserFactory {
    static getParser(seller: SellerType): IProductParser {
        switch (seller) {
            case "dns": {
                return new DnsProductParser();
                break;
            }
            case "ozon": {
                return new OzonProductParser();
                break;
            }
            case "citilink": {
                return new CitilinkProductParser();
                break;
            }
            case "aliexpress": {
                return new AliexpressProductParser();
                break;
            }
            case "mvideo": {
                return new MvideoProductParser();
                break;
            }
            default: return null;
        }
    }
}