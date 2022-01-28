const puppeteer = require('puppeteer');
const navigation = require("./helpers/navigation");
const filter = require("./helpers/filter");
const selectors = require('./selectors/mtgTop8');
const cards = require('./helpers/cards');
const convert = require('./helpers/convert');

const mtgTop8 = "https://www.mtgtop8.com/topcards";
const numberOfPage = 25; // 20 cards per page = 500 cards

const scrapMtgTop8 = async () => {
  const browser = await puppeteer.launch({ headless: true });
  let topCards = []
  const page = await browser.newPage();
  await navigation.goToUrl(mtgTop8, page);
  await page.click(selectors.cookieBanner);
  await filter.changeFormat(page);

  console.log('start...');
  for (let index = 0; index < numberOfPage; index++) {
    console.log('Page n°', index + 1);
    const newCards = await cards.getCards(page);
    console.log('new cards', newCards);
    topCards = [...topCards, ...newCards];
    console.log('click next page');
    await navigation.nextPage(page);
  }
  console.log('end');

  convert.convertArrayToJson(topCards);
  await browser.close();
};

scrapMtgTop8();