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
            }
            case "www.dns-shop.ru": {
                return "dns";
            }
            case "www.mvideo.ru": {
                return "mvideo";
            }
            case "www.citilink.ru": {
                return "citilink";
            }
            default: {
                throw new Error("This seller is not supported");
            }
        }
    }


}