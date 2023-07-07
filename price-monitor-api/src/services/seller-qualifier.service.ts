import {SellerType} from "../types/seller.type";
import {StringHelperService} from "./string-helper.service";

export class SellerQualifierService {
    private readonly stringHelperService = new StringHelperService();

    getSeller(link: string): SellerType {
        let startingPos = this.stringHelperService.getNthSubstrPos(link, '/', 1);
        let endingPos = this.stringHelperService.getNthSubstrPos(link, '/', 3);
        let domain = link.slice(startingPos + 1, endingPos - 1);
        switch (domain) {
            case "www.ozon.ru": {
                return "ozon";
                break;
            }
            case "www.dns-shop.ru": {
                return "dns";
                break;
            }
            case "www.mvideo.ru": {
                return "mvideo";
                break;
            }
            case "aliexpress.ru": {
                return "aliexpress";
                break;
            }
            case "www.citilink.ru": {
                return "citilink";
                break;
            }
            default: {
                return null;
                break;
            }
        }
    }


}