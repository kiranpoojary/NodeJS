var fs = require("fs");
var data = fs.readFileSync('inputFile.txt');

console.log(data.toString());
console.log("Program Ended");