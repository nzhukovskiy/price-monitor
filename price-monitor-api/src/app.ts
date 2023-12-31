import express = require('express')
import {SellerQualifierService} from "./services/seller-qualifier.service";
import {ProductParserFactory} from "./factories/product-parser-factory";
import {StringHelperService} from "./services/string-helper.service";
const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

export const puppeteerOptions = {
    args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
    ],
    executablePath:
        process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
};

const app = express()
const port = process.env.PORT || 3000;
app.use(cors(corsOptions));

const sellerQualifierService = new SellerQualifierService();
const stringHelperService = new StringHelperService();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/parse', async (req, res) => {
    try {
        let seller = sellerQualifierService.getSeller(req.query.link as string);
        let productParser = ProductParserFactory.getParser(seller, stringHelperService);
        let product = await productParser.parsePrice(req.query.link as string);
        res.status(200).send(product);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
})

app.get('/get', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(req.query.link, {
            waitUntil: "networkidle0"
        });
        res.status(200).send(await page.evaluate(() => document.querySelector('*').textContent));
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});

app.listen(port, () => {
})