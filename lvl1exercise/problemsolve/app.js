// Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)

// ```jsx
// // test data
// console.log(largest([6, 13, 250, 3)) // => 250
// console.log(largest([3, 5, 2, 8, 1])) // => 8
// console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40
// ```

// const numbers = [21,45,78,93,260,54,890,35.57]
// let highest = 0;
// const largestNumber = (num) =>{
//     for(let i=0; i < num.length; i++){
//         if(numk[i] > highest){
//             highest = num[i]
//         }
//     }
//     return highest

// }
// console.log(largestNumber(numbers))
// Write a function that takes an array of words and a character and returns each word that has that character present.

// ```jsx
// // test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") => // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []
// ```
// the best way
// function filterWords(words, symbols) {
//     return words.filter(word => word.includes(symbols));
//   }
//   console.log(filterWords(['dog','c@t', 'mou$e','bird', 'owl!'], '$'))
// // how i wrote my for loop 
// const arrWords = ['dog','c@t', 'mou$e','bird', 'owl!']  // array with words. need to return words with symbols
// const symbol = ['!','@','#','$','%','^','&','*'] 
// const filterArr = []
//   function wordSym (){
//     for(let i = 0; i < arrWords[i].length; i++){
//      if(arrWords[i].includes(symbol[i])){
//         filterArr.push(arrWords[i])
//      }
//      }
//      return filterArr
//     }
//     wordSym()
//   console.log(filterArr)

// //how the for loop should be 
// function getWordsThatIncludeCharacter(words, char){
//     const filteredWords = []
    
//     for(let i = 0; i < words.length; i++){
//       if(words[i].includes(char)){
  
//         filteredWords.push(words[i])
  
//       }
//     }
  
//     return filteredWords
//   }
  
//   console.log(getWordsThatIncludeCharacter(["dog", "cat", "bird", "moth"], "o")) // returns ["dog", "moth"]




// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// test data
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false
function divide (num1,num2){
    // if(num1 % num2 === 0){
    //     num1 === true 
    // }else {
    //     num1 === false
    // }
    return num1 % num2 === 0
}
console.log(divide(10,3))


  