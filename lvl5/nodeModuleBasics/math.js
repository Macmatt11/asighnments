function sum(a,b){
    return a+b 
}

function subtract(a,b){
    return a-b
}

module.exports = {//with es6 you can use object literals which eliminates the need for the key 
    sum, // instead of --> sum:sum,   
    subtract // instead of --> subtract:subtract 
}

// exporting an anonymous function expression:

module.exports.sum = function (a,b){
return a+b
}

module.exports.subtract = function (a,b){
    return a-b
    }

//"Revealing Module Pattern"  allows you to expose only the things you want to expose in your module. You may decide to run a bunch of logic, have helper functions, etc. all to come to a final result, and then only expose that final result when the require() function is run.
const factor = 2

function multiply(num){
return num*factor // user has access to function but doesnt know what the multiplier is 
}

module.exports = multiply

// we can even make the factor changeable 

// let factor = 2 

// function multiply(num){
//     return num*factor
// }

// function setFactor(newFactor){
//     factor = newFactor
// }

// module.exports = {multiply, setFactor}

//constructor functions

function User(name,age){
    this.name = name
    this.age= age 
}

module.exports = User