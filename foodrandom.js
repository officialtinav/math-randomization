//array one will be a cooking method
var cooking = [
"steamed",
"fried",
"raw",
"stir fry",
"deep fried",
"smoked",

];

//array two will be a type of food

var type = [
"spaghetti",
"seafood",
"steak",
"rice",
"spicy tuna bowl",
"bread",
"potato"
]

//make the computer choose a food and a way it is cooked
var randOne = Math.floor(Math.random() * cooking.length);
var randTwo = Math.floor(Math.random() * type.length);
window.alert(cooking[randOne] + " " + type[randTwo]);