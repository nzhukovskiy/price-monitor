"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerQualifierService = void 0;
const string_helper_service_1 = require("./string-helper.service");
class SellerQualifierService {
    constructor() {
        this.stringHelperService = new string_helper_service_1.StringHelperService();
    }
    getSeller(link) {
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
exports.SellerQualifierService = SellerQualifierService;
//# sourceMappingURL=seller-qualifier.service.js.map