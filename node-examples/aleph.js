// a simple javascript re-implementation of david hirmes' "Aleph"
// http://hirmes.com/aleph/
var fs = require('fs');
var rita = require('rita');

// this line stores whatever you type after "node program.js" on the command
// line in the variable "fname". I'm using it here to let you specify the name
// of the file you want to use on the command-line, instead of hard-coding it
// in the file.
var fname = process.argv[2];
var text = fs.readFileSync(fname, 'utf8');

// a list of tokens (words) from the text; a corresponding list of
// part-of-speech tags
var tokens = rita.RiTa.tokenize(text);
var tags = rita.RiTa.getPosTags(tokens);

var whatISaw = [];
for (var i = 0; i < tokens.length; i++) {
    if (tags[i] == 'nn') {
        whatISaw.push("I saw the " + tokens[i] + ".");
    }
}

console.log(whatISaw.join(" "));
