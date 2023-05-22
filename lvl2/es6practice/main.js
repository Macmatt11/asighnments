//Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

//John is the pet owner, and his name should be stored differently than the other names.
// const Ownername = "John"
// const age = 101


// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", Ownername)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//### **Task 1**Re-write this `.map()` using an arrow function:
//Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a 
//function, and not starting an object, so the `:` will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot =>({ type: "carrot", name: carrot }))
// }

// console.log(mapVegetables(carrots))

//Re-write this .filter() ’s callback function using an arrow function:

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// // function filterForFriendly(arr) {
// //     return arr.filter(function(person) {
// //         return person.friendly
// //     })
// // }

// function filterForFriendly(arr){
//     return arr.filter(person => person.friendly)
// }
// console.log(filterForFriendly(people))

//Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }
//es6
// const doMathSum = (a,b) => a + b
// console.log(doMathSum(5,5))

// // var produceProduct = function(a, b) {
// //     return a * b
// // }
// //es6

// const produceProduct = (a,b) => a * b 
// console.log(produceProduct(5,5))

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// `firstName` should default to `"Jane" lastName` should default to `"Doe", age` should default to `100`

// const printString = (firstName = 'jane', lastName = 'doe', age = 100) => `hi ${firstName} ${lastName} , how does it feel to be  ${age} ?`
// console.log(printString())

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog")}
 console.log(filterForDogs(animals))

//  function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }
