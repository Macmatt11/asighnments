//1a) Write a function that returns the sum of two numbers. 
//Throw an error if either argument is not of the data type number:
// non number data types are strings, booleans or arrays and objects 

//function sum ( num 1, num 2) is returning num1 + num2 
// inside of function a try {} and catch is needed 
//finally is needed 

//function sum(x, y){
    // if(Number.isInteger(x) && Number.isInteger(y)){
    //     x + y
    //    }else {
    //        throw new Error ('Not a Number!')
    //    }
    //    return x + y
    //  }
//1a
// function sum(x, y){
//     if(!Number.isInteger(x) || !Number.isInteger(y)){
//         throw new Error ('Not a Number!')
//     }
//     return x + y
//   }
// console.log(sum(8,9))

//1b : 1b) Call the sum function inside a try block using "1" 
//and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// try{
// sum('1','2')
// }
// catch(err){
//     console.log(err)
// }

// 2a 
//Given a user object, write a function called login that takes 
//a username and password as parameters. Throw an error if either 
//of them don't match. Otherwise, log to the console a message 
//saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
if (username !== "sam" || password !== "123abc"){
    throw new Error ('Information Incorrect!');
}
   return  console.log("Login Successful")
}

// login("sam", "123ab")

//2b  Call the login function within a try block. In one instance use the correct 
//credentials, and in another use incorrect ones

try{
login("sa","123abc")
}
catch(err){
    console.log(err)
}
