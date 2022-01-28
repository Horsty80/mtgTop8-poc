const mtgTop8 = require('../selectors/mtgTop8');

const changeFormat = async (page) => {
    await page.waitForSelector(`${mtgTop8.formatSelect}`);
    await page.select(mtgTop8.formatSelect, mtgTop8.selectValues.edh);
    await page.click(mtgTop8.checkboxLands);
    await page.click(mtgTop8.submitButton);
    await page.waitForSelector(mtgTop8.title);
}

module.exports = {
    changeFormat
}