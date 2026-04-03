var isGoing = false
var color = isGoing ? "green" : "red";
console.log(color);
//Ternary operator : var + varName = variable To check  + ? + value to take if true + : + value to take if false


// switch statement
var option = 3

switch (option) { // if you don't use break statement you'll run to a problem called : falling through which means you'll
    // print the case and all the cases after it
    case 1:
        console.log("you chose 1");
        break;
    case 2:
        console.log("you chose 2");
        break;
    case 3:
        console.log("you chose 3");
        break;
    default: // can you this to add a default message that prints after a case  , the problem is that the case should be the
            // one  before it or else it's gonna have a lot of  cases printed
        console.log("so you die");
}

// Loops
// While loop structure:
var i = 1
while(/*condition*/ i < 10){
    // here goes your  instructions
    console.log(i)
    // don't forget to update the condition or use break statement or else you'll end up with an infinite loop
    i = i + 1
}
// For loop
for(var j = 0; j < 3; j++){
    // your instructions go here
    console.log(j)
}
// Nested loops
for(var k = 0; k < 3; k++){
    for(var l = 0; l < 3; l++){
        console.log(k+","+l)
        // it will start printing: 0,0 ; 0,1 ........until 2,2
    }
}
// increment or decrement shortcuts:
/*
x++ or ++x // same as x = x + 1
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x*  2
x /= 5 // same as x = x / 5
*/

// Functions:
// syntax:
function add(a, b){
    return a + b;
}
/*
**If an identifier is declared in global scope, it's available everywhere.

**If an identifier is declared in function scope, it's available in the
function it was declared in (even in functions declared inside the function).

**When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't
find anything, it will continue to the next outer function to see if it can find the identifier there,
It will keep doing this until it reaches the global scope.

**Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.

**shadowing mean: when a variable declared within a specific inner scope (like a function or a block)
has the same name as a variable in an outer scope.


** hoisting mean: a behavior where the interpreter appears to move the declarations of functions, variables,
and classes to the top of their containing scope during the compilation phase, before the code is executed.

**Variable assignments are not hoisted
*/

// function expressions:
//Function Expression: When a function is assigned to a variable. The function can be named,
//or anonymous. Use the variable name to call a function defined in a function expression.
/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
}
*/

// Arrays:
//syntax
var arr = [2,"food",true,2.6]
// arrays can be of different data types , and can be nested
// methods and proprieties:

// length
var arr2 = [2,3,4,5]
console.log(arr2.length)

// push : add and element to the end of the array
arr2.push(9)
console.log(arr2)

// pop : remove the last element of the array
arr2.pop()
console.log(arr2)

// splice : lets you  add and remove from a specific (range) index in the array( from the starting index and the number of elements to delete and with what to replace):
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2,0,"hello","goodMorning")
console.log(donuts)

// reverse:  reverses an array
var reverseMe = ["o", "l", "l", "e", "h"];
console.log(reverseMe.reverse())

// sort : sorts an array
var sortMe = [2, 1, 3, 7, 6];
console.log(sortMe.sort())

// shift : removes the first element of the array
var removeFirstElement = ["a", "b", "c"];
removeFirstElement.shift()
console.log(removeFirstElement)

// join : turn an array into a string
var stringMe = ["o", "l", "l", "e", "h"];
console.log(stringMe.join(''))


// Objects:
// objects are a data structure in JavaScript that lets you store data about a particular thing,
// and helps you keep track of that data by using a "key".
var identity = {
    firstName: "Fouad",
    lastName: "Charfaoui",
    age: 18,
    country : "Algeria",
    job : function (){return "he is a software developer"}

}
// you can get the value using two methods:
console.log(identity.lastName) // called "dot notation"
console.log(identity["country"]) // called "bracket notation"
console.log(identity.job())