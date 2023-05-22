// to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...animals) {
//     return animals 
// }
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "beaver"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax
// that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit: fruit, sweets: sweets, vegetables: vegetables}
// }
// console.log(combineFruit(['apple','pear'], ['cake', 'pie'], ['carrot']))

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//   }

//Use destructuring to use the property names as variables. Destructure the object in the parameter:

// function parseSentence({location,duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//   console.log(parseSentence({
//     location: "Phoenix Arizona",
//     duration: "2 weeks"
//   }));

//Use array destructuring to make this code ES6:

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst([ 'a','b','c']))

// function returnFirst(items){
//     const [firstItem] = items; // Using array destructuring to extract the first item from the array
//     return firstItem;
//   }
//   console.log(returnFirst([ 'a','b','c']))

  //Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
//   const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are ${firstFav}, ${secondFav} and  ${thirdFav}`
// }

// console.log(returnFavorites(['driving', 'eating', 'traveling', 'sleeping', 'chilling']))
// console.log(returnFavorites(favoriteActivities))

//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You
// may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(array,array2,array3) {
    
// return [...array, ...array2, ...array3]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6y:

// function product(a, b, c, d, e) {
//     var numbers = [1,2,3,4,5];
  
//     return numbers.reduce((acc, number) => acc * number, 1)}
  
// console.log(product())
//es6
// function product (...numbers ){
//     return numbers.reduce((acc, number)=> acc * number, 1)
// }
// console.log(product(1,2,3,4,5))

//Make the following function more ES6y. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }
// console.log(unshift([2,4,6,8], 1,3,5,7,9))
// function unshift (array, ...numbers){
//     return [...numbers, ...array]
// }
// console.log(unshift([2,4,6,8], 1,3,5,7,9))

//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make 
//the syntax look less redundant to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }




function populatePeople(names){
    return names.map(function(name){
        const [firstName, lastName] = name.split(" "); // use destructuring to assign the first and last name variables
        return {
            firstName, lastName // use shorthand syntax to eliminate redundancy
        }
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]