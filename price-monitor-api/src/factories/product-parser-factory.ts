import {SellerType} from "../types/seller.type";
import {ProductParser} from "../contracts/product-parser";
import {DnsProductParser} from "../services/product-parsers/dns-product-parser";
import {OzonProductParser} from "../services/product-parsers/ozon-product-parser";
import {CitilinkProductParser} from "../services/product-parsers/citilink-product-parser";
import {AliexpressProductParser} from "../services/product-parsers/aliexpress-product-parser";
import {MvideoProductParser} from "../services/product-parsers/mvideo-product-parser";
import {StringHelperService} from "../services/string-helper.service";

export class ProductParserFactory {
    static getParser(seller: SellerType, stringHelperService: StringHelperService): ProductParser {
        switch (seller) {
            case "dns": {
                return new DnsProductParser(stringHelperService);
            }
            case "ozon": {
                return new OzonProductParser(stringHelperService);
            }
            case "citilink": {
                return new CitilinkProductParser(stringHelperService);
            }
            case "aliexpress": {
                return new AliexpressProductParser(stringHelperService);
            }
            case "mvideo": {
                return new MvideoProductParser(stringHelperService);
            }
            default: throw new Error("Unknown seller");
        }
    }
}