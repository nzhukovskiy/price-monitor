export class StringHelperService {
    getNthSubstrPos(str: string, substr: string, n: number) {
        let i = 0;
        for (i = 0; i < str.length && n > 0; i++, n--) {
            i = str.indexOf(substr, i);
        }
        return i;
    }
    
    removeCurrencyAndSpaces(str: string) {
        return str.replace(/\s/g, '').replace("₽", "");
    }
}