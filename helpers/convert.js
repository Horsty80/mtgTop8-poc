const fs = require("fs");

const convertArrayToJson = (arr) => {
    fs.writeFileSync('topCards.json', JSON.stringify(arr), "utf8");
}

module.exports = {
    convertArrayToJson
}