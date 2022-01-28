const mtgTop8 = require('../selectors/mtgTop8');

const getCards = async (page) => {
    await page.waitForSelector(mtgTop8.results.cardPanel);
    return await page.$$eval(mtgTop8.results.card, trs => trs.map(tr => tr.children[0].innerText));
}

module.exports = {
    getCards
}