"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const products_service_1 = require("./services/products.service");
const seller_qualifier_service_1 = require("./services/seller-qualifier.service");
const product_parser_factory_1 = require("./factories/product-parser-factory");
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const app = express();
const port = 3000;
const productsService = new products_service_1.ProductsService();
const sellerQualifierService = new seller_qualifier_service_1.SellerQualifierService();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/parse', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let seller = sellerQualifierService.getSeller(req.query.link);
    let productParser = product_parser_factory_1.ProductParserFactory.getParser(seller);
    let product = yield productParser.parsePrice(req.query.link);
    res.status(200).send(product);
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map