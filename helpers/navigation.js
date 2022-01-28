const mtgTop8 = require('../selectors/mtgTop8');

const goToUrl = async (url, page) => {
  await page.goto(url);
};

const nextPage = async (page) => {
  const nextButton = await page.$$(mtgTop8.nextButton);
  await nextButton[1].click();
}

module.exports = {
  goToUrl,
  nextPage
};
