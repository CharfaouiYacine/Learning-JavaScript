function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(4));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
var laugh = function(num){
    var message = ""
    for(var i=0;i<num;i++){
        message +="ha"
    }
    message +="!"
    return message
}

emotions("happy",laugh)