
//piping
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('inputFile.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('outputFile.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");





//chaining
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('inputFile.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");