var fs = require('fs');
var http = require('http');
var rita = require('rita');

var text = fs.readFileSync("genesis.txt", 'utf8');

var markov = rita.RiMarkov(3);
markov.loadText(text);

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(markov.generateSentences(1)[0]);
    response.end();
}).listen(8888);

console.log("web server now available at http://127.0.0.1:8888");
console.log("ctrl+C to quit");

