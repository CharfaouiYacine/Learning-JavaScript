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