const ps = require("prompt-sync")
const input = ps()
let ans
let operators ={
    "+":add,
    "-":sub,
    "*":mul,
    "/":div,
    "**":pow,
}
function add(a,b){
    return Number(a)+Number(b);
}
function sub(a,b){
    return Number(a)-Number(b);
}
function mul(a,b){
    return Number(a)*Number(b);
}
function div(a,b){
    if(b===0){
        return "Can't divide by zero";
    }else{
        return Number(a)/Number(b);
    }
}
function pow(a,b){
    return Number(a)**Number(b);
}

function calculation(){
    ////////////////////////////////////////////////////////////////
    let operator = input("Enter the operator: ")
    if(operator === "exit"){
        return
    }
    while(!(operator in operators)){
        operator = input("Please enter a valid operator: ")
    }
    ////////////////////////////////////////////////////////////////
    let num1 = input("Enter the first number or ans: ")
    if(num1 === "ans"){
        if(ans === null || ans === undefined){
            num1 = Number(input("ans is still empty please enter a number: "))
            while(!Number.isFinite(Number(num1)) || num1 === "ans"){
                num1 =Number(input("Please enter a valid number: "))
            }
        }
        else{
            num1 = ans
        }
    }
    else {
        while (!Number.isFinite(Number(num1))) {
            num1 = Number(input("Please enter a valid number: "))
        }
    }
    //////////////////////////////////////////////////////////////
    let num2 = input("Enter the second number or ans: ")
    if(num2 === "ans"){
        if(ans === null || ans === undefined){
            num2 = Number(input("ans is still empty please enter a number: "))
            while(!Number.isFinite(Number(num2))|| num2 === "ans"){
                num2 =Number(input("Please enter a valid number: "))
            }
        }
        else{
            num2 = ans
        }
    }
    else {
        while (!Number.isFinite(Number(num2))) {
            num2 = Number(input("Please enter a valid number: "))
        }
    }
    /////////////////////////////////////////////////////////////
    console.log(operators[operator](Number(num1),Number(num2)))
    ans = operators[operator](Number(num1),Number(num2))
    calculation()
}
function __main__(){
let menu = "Choose an operation please :\n1)add(+)\n2)subtract(-)\n3)multiply(*)\n4)divide(/)\n5)power of x(**)\n or write exit"
console.log(menu)
calculation()
}

__main__()