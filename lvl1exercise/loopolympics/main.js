// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// for (let i = 0; i <= 9; i++){
//     console.log(i)
// }
// 2. Write a for loop that prints to the console 9 through 0.
// for (let i = 9; i >0; i--){
//       console.log(i)
// }
// 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(let i = 0; i < fruit.length; i++){
// console.log(fruit[i])
// }

// # **Bronze Medal**

//1. Write a for loop that will push the numbers 0 through 9 to an array.
// const numbers= []

// for (let i = 0; i <= 9; i++){
//        numbers.push(i)
//        console.log(numbers[i])
// }
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
//for (let i = 0; i <= 100; i +=2){
//console.log(i)
//}       
// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`
//  const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// const fruit2 = []
// for (let i = 1; i < fruit.length; i+=2){     
//        fruit2.push(fruit[i]);
//        console.log(fruit2)
             
// }

//silver medal
//1. Write a loop that will print out all the names of the people of the people array
const peopleArray = [
       {
         name: "Harrison Ford",
         occupation: "Actor"
       },
       {
         name: "Justin Bieber",
         occupation: "Singer"
       },
       {
         name: "Vladimir Putin",
         occupation: "Politician"
       },
       {
         name: "Oprah",
         occupation: "Entertainer"
       }
     ]

//      1. 
//      for (i = 0; i < peopleArray.length; i++){
//        console.log(peopleArray[i].name)
//      }

//     2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// var nameArr = []
// var occupationArr = []

// for (i = 0; i < peopleArray.length; i++)[
//        nameArr.push(peopleArray[i].name) ,
//        occupationArr.push(peopleArray[i].occupation),
//        console.log(nameArr),
//        console.log(occupationArr)
// ]

//3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
    const peopleName = [];
    const peopleJob = []
for(i = 0; i < peopleArray.length; i++){
       if( i % 2 === 0){
              peopleName.push(peopleArray[i].name);
                     console.log(peopleName);
       } if (i % 2 !== 0){
                     peopleJob.push(peopleArray[i].occupation);
                            console.log(peopleJob)

       }
       
}

     // ["Harrison Ford", "Vladimir Putin"] // names
     // ["Singer", "Entertainer"] // occupations
     