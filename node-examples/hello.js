var greetings = ["hello", "greetings", "hey there", "hi", "howdy"];
var places = ["city", "country", "world", "solar system", "galaxy"];

function choice(t) {
    return t[Math.floor(Math.random()*t.length)];
}

for (var i = 0; i < 10; i++) {
    console.log(choice(greetings) + ", " + choice(places));
}
