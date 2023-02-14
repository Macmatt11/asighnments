// Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:

// ```
// function forception(people, alphabet){
//     // your code here
// }
// // Output:
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// ```

// Here's the array of names and the alphabet to get you started:

// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// var alphabet = "abcdefghijklmnopqrstuvwxyz"

// var arrAlphabet = alphabet.split("");
// var myArray = []

// function forception(peopleArray, alphaArray){
//     for (var i = 0; i < peopleArray.length; i++){
//         myArray.push(peopleArray[i])
//             for(var j = 0; j< alphaArray.length; j++){
//                    myArray.push(alphaArray[j].toUpperCase())
//             }
            
  
//         }  
//         return myArray
// }
// console.log(forception(people,arrAlphabet))

  
   


function forception(arr1,arr2){
    let newArr = [];
    
    for(let i = 0 ; i < arr1.length; i++){
        newArr.push(arr1[i])
        for(let j = 0; j< arr2.length; j ++){
            newArr.push(arr2[j]);
        }
    }
    return newArr
}
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetArr = alphabet.toUpperCase().split("");

    
console.log(forception(people,alphabetArr))
       
    


