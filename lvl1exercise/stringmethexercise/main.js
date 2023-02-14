//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// function stringUpperLower (monkey){
//     return monkey.toUpperCase() + monkey.toLowerCase()
// }

// console.log(stringUpperLower("topgun"))

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// ex findMiddleIndex("Hello") // => 2
// ex findMiddleIndex("Hello World") // => 5
// - need a function, - string(use aboves), -figure out how to get half value, -return a # half the strings length
// function findMiddleIndex (string){
//     return Math.floor(string.length / 2)
// } 

// console.log(findMiddleIndex("mississippi"))

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
// var strng = "topgun"
// function returnFirstHalf(strng){
//     const midIndex = Math.floor(strng.length / 2);
//     const firstHalf = strng.slice(0,midIndex);
//     return firstHalf
// } 
// console.log(returnFirstHalf("mississippi"))

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
var strng = "topgun"
function capilizeAndLowercase (strng){
    var midIndex = Math.floor(strng.length / 2);
    var firstHalf = strng.slice(0,midIndex);
    var capHalf = firstHalf.toUpperCase();
    var secHalf = strng.slice(midIndex);
    return  capHalf + secHalf
} 
console.log(capilizeAndLowercase(strng))

//code challenge 
// Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.

// var num = "7"
// function isIntegerAndPos(num){
//     var integer = Number.isInteger(num)   //this determines if the value or number is an integer. the response will be a true/false
//         if(integer === true){              //  if the input value is true run the following 
//             var sign = Math.sign(num)    // The Math.sign() method retuns whether a number is negative, positive or zero. If the number is positive, this method returns 1.If the number is negative, it returns -1.
//           return sign
//         }
//    }console.log(isIntegerAndPos(num)) // this function tells me that all the numbers inside  of the array myArray are non - negative integers

// var myArray = [13, 7,"m", 24, "zw", 0]
// function isTrue(num){
//     return Number.isInteger(num)     //will determines if the value or number is an integer. the response will be a true/false
//    }
// console.log(myArray.filter(isTrue))// is filtering all values inside of array and if they're true it will push to new array if values are false it will not put in new array

// only need to declare this string variable once
// you can reuse amongst all your functions as seen below
var guntop = 'topgun'

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(lion) {
  return lion.slice(0, Math.floor(lion.length / 2))
}

console.log(returnFirstHalf(guntop))
console.log(returnFirstHalf('testAlLtHeDIFFERENTcases'))

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function capilizeAndLowercase(monkey) {
  // you could just put the Math.floor inside your slice, but that looks really cluttered and ugly
  var midIndex = Math.floor(monkey.length / 2)

  return (
    monkey.slice(0, midIndex).toUpperCase() +
    monkey.slice(midIndex).toLowerCase()
  )
}

console.log(capilizeAndLowercase(guntop))
console.log(capilizeAndLowercase('testAlLtHeDIFFERENTcases'))