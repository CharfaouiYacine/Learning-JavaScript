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