var fs = require('fs');

// read contents of genesis.txt, decode to string with
// utf8 encoding
var text = fs.readFileSync("genesis.txt", "utf8");

var words = text.split(" ");
console.log(words.length);

