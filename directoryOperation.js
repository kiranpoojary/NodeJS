//Create Directory
var fs = require("fs");

console.log("Going to create directory /test");
fs.mkdir('../NodeJS/test',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});





//Read Directory
var fs = require("fs");

console.log("Going to read directory /tmp");
fs.readdir("../NodeJS/",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});




//Remove Directory
var fs = require("fs");

console.log("Going to delete directory /test");
fs.rmdir("test",function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /test");
   
   fs.readdir("/test/",function(err, files) {
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file) {
         console.log( file );
      });
   });
});


