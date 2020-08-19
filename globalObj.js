//  __filename
console.log(__filename);

//__dirname
console.log(__dirname);




//setTimeout
function printHello() {
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);




//clearTimeout(t);
function printHello() {
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);
// Now clear the timer
clearTimeout(t);





//setInterval(printHello, 2000);
function printHello() {
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);