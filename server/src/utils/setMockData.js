const fs = require("fs");
const setMockData = () => {

    fs.readFile("./src/__tests__/test.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return "";
    }
    console.log("File data:", jsonString, typeof jsonString);
    localStorage.setItem("mock",jsonString);
    console.log("mock data set\n",jsonString )
    });

}

module.exports = {setMockData}