var fs = require('fs');
var rita = require('rita');

var text = fs.readFileSync("genesis.txt", 'utf8');

var markov = rita.RiMarkov(3);
markov.loadText(text);

for (var i = 0; i < 10; i++) {
    console.log(markov.generateSentences(1)[0]);
}
