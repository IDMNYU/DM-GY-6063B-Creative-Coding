var fs = require('fs');
var rita = require('rita');
var TwitterAPI = require('node-twitter-api');

// create markov model
var text = fs.readFileSync("genesis.txt", 'utf8');
var markov = rita.RiMarkov(3);
markov.loadText(text);

// grab keys from the command-line; see notes for instructions on how
// to obtain keys!
var cKey = process.argv[2];
var cSecret = process.argv[3];
var accessToken = process.argv[4];
var tokenSecret = process.argv[5];

// create a twitter API object
var twitter = TwitterAPI({
    consumerKey: cKey,
    consumerSecret: cSecret});

// post the status update. the value for the key "status" in the object below
// will be the content of the post.
twitter.statuses("update",
    {"status": markov.generateSentences(1)[0]},
    accessToken,
    tokenSecret,
    function(error, data, response) {
        // code in this function will be executed after the request to post
        // a status update.
        if (error) {
            console.log(error);
        }
    }
);
