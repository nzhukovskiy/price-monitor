import {DnsProductParser} from "./services/dns-product-parser";

import express = require('express')
import {ProductsService} from "./services/products.service";
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const app = express()
const port = 3000

const productsService = new ProductsService();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', async (req, res) => {
    let product = await productsService.parseProduct(req.query.link as string, new DnsProductParser());
    res.status(200).send(product);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})