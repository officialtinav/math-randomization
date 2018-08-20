//create any array of adjectives
var adjectives = [
"breathtaking",
"tiny",
"smart",
"astonishing"
];

//ask the user for his or her name
var name = prompt("what is your name?");

//create a random number
var choose = (Math.floor(Math.random() *adjectives.length));

//tell the user that he or she "is" followed by the adjectives
window.alert(name + " " + "is" + " " + adjectives[choose]);

