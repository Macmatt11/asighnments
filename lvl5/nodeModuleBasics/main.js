const {sum, subtract} = require('./math.js') //object destructuring

//or another way of calling a function

const sum = require('./math.js').sum

console.log(sum(10,20))

const subtract = require('./math.js').subtract
console.log(subtract(20,10))

// if we want to only use once then we dont need to store in a const 

console.log(require('./math.js').subtract(20,10))

//"Revealing Module Pattern"  allows you to expose only the things you want to expose in your module. You may decide to run a bunch of logic, have helper functions, etc. all to come to a final result, and then only expose that final result when the require() function is run.

const mult = require("./math.js")
console.log(mult(10))

//here is the require() for themultiply and set factor 

const{multiply,setFactor} = require("./math.js")

console.log(multiply(10)) //gives 20 bc the default factor is 2 

setFactor(10)//changes factor to 10
console.log(multiply(10)) // returns 100 bc the setfactor is changed to 10

//constructor functions

const User = require('./math.js')
// console.log(User) // returns [function: User]

console.log(new User('steve', 18)) // returns User { name: 'steve', age: 18 }

// export, export default, and import are used in pure javascript and are not known by node. used on frontend 

// vs 

// require and module.exports are node key words and need to be used for node used on backend 