import {DnsProductParser} from "./services/product-parsers/dns-product-parser";

import express = require('express')
import {ProductsService} from "./services/products.service";
import {SellerQualifierService} from "./services/seller-qualifier.service";
import {ProductParserFactory} from "./factories/product-parser-factory";
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const app = express()
const port = 3000

const productsService = new ProductsService();
const sellerQualifierService = new SellerQualifierService();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/parse', async (req, res) => {
    let seller = sellerQualifierService.getSeller(req.query.link as string);
    let productParser = ProductParserFactory.getParser(seller);
    let product = await productParser.parsePrice(req.query.link as string);
    res.status(200).send(product);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})