// This is a mini program that tells you if an animal is herbivore , carnivore , omnivore , or  undefined
// can only use ternary operator  and can't use if else statements,

var eatsPlants = false;
var eatsAnimals = true;
var category = eatsPlants&&eatsAnimals ? "omnivore":(eatsPlants ? "herbivore":(eatsAnimals ? "carnivore": "undefined"))

console.log(category);