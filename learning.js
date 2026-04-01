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



