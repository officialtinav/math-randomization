//i want the computer to choose what to eat and show it on the screen

var foods = [
"sushi",
"spicy tuna bowl",
"steak"
];

var choose = (Math.floor(Math.random() * foods.length));
window.alert(foods[choose]);

