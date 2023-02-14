//node calculator 

// - A function that adds two numbers and returns the result
// - A function that multiplies two numbers and returns the result
//- A function that divides two numbers and returns the result
//- A function that subtracts two numbers and returns the result
//- Each function will have 2 parameters, `num1`, `num2`
//- On the console the prompt will print to the user:
//- *Please enter your first number* (store that number)
//- *Please enter your second number* (store that number)
//- *Please enter the operation to perform: **add**, **sub**, **mul**, **div*** (then store the operation)
//- Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
//- You will then print to the console: *The result is: [the result]*

function sum (num1,num2){
   return num1 + num2 
};
function subtract (num1,num2){
   return num1 - num2
};
function multiply (num1,num2){
  return num1 * num2
};
function division (num1,num2){
 return num1 / num2
};

var readlineSync = require("readline-sync");
var firstNumber = parseInt(readlineSync.question("Please enter your first number "));
console.log(typeof firstNumber);
var secondNumber = parseInt(readlineSync.question("Please enter your second number "));
console.log(typeof secondNumber)
const operator = readlineSync.keyIn("do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply?", {limit: "asdm"})
if(operator === "a"){ 
    console.log(sum(firstNumber , secondNumber) )
} else if (operator === "s"){ 
    console.log(subtract(firstNumber , secondNumber)  )
} else if (operator === "d"){ 
    console.log(division(firstNumber , secondNumber) )
} else if (operator === "m") { 
    console.log(multiply(firstNumber , secondNumber) )
}









