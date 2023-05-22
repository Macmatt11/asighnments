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

function combineAnimals(array,array2,array3) {
    
return [...array, ...array2, ...array3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6y:

function product(a, b, c, d, e) {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  