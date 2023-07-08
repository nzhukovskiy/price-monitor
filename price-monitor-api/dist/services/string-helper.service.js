"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelperService = void 0;
class StringHelperService {
    getNthSubstrPos(str, substr, n) {
        let i = 0;
        for (i = 0; i < str.length && n > 0; i++, n--) {
            i = str.indexOf(substr, i);
        }
        return i;
    }
    removeCurrencyAndSpaces(str) {
        return str.replace(/\s/g, '').replace("₽", "");
    }
}
exports.StringHelperService = StringHelperService;
//# sourceMappingURL=string-helper.service.js.map