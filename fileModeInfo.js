var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('inputFile.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});




var fs = require("fs");

console.log("Going to get file info!");
fs.stat('inputFile.txt', function (err, stats) {
   if (err) {
      return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});



