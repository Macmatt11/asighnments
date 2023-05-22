//1) Make an array of numbers that are doubles of the first array:

//forloop
// function doubleNumbers(arr){
//   let newArr = [];
//   for (i=0; i < arr.length; i++){
//     newArr.push(arr[i] * 2)
//   } return newArr
//   }

//   console.log(doubleNumbers([2,5,100]))
  //map()
//   const numbers = [2,5,100]
//   const result = numbers.map(function(number){
//    return number * 2
//   })
//   console.log(result)

  // how to make func dynamic
//   function doubleNumbers(arr){
//   return arr.map(function(num){
//     return num * 2
//   })
//   }
//   console.log(doubleNumbers([2,5,100]))
  //es6 type
//   function doubleNumbers(arr){    //preferred method
//     return arr.map(num => num *2)
//   }
  
//  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  
//  2) Take an array of numbers and make them strings:
//forloop
// function stringItUp(arr){
//     let newArr = [];
//     for(i = 0; i < arr.length; i++){
//         newArr.push(arr[i].toString())
//     } return newArr
//   }
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  
// const ogArray = [2, 5, 100];
// const result = ogArray.map(function(num){
//     return num.toString()
// })
// console.log(result);

//more dynamic
// function stringItUp(arr){
//     return arr.map(function(num){
//         return num.toString()
//     })
// }
// console.log(stringItUp([2,5,100]));

//es6 fat arrow 
// function stringItUp(arr){
//     return arr.map(num => num.toString())
// }
// console.log(stringItUp([2,5,100]))

//3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr){
  return arr.map(function(name){
    return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()   // charAt() method returns the character at the specified index in a string
    // had to cut the string after index 0 and lowercase everything after the fist letter. this is why string was used. 
  })
  }
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


//  function capitalizeNames(arr){
//     return arr.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
//  }
//  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

 //4) Make an array of strings of the names
//  function namesOnly(arr){
//    return arr.map(function(user){
//     return user.name
//    })
//   };

  //es6 fat arrow
//   function namesOnly(arr){
//     return arr.map(user => user.name)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  //5) Make an array of strings of the names saying whether or not they can go to The Matrix
  
//   function makeStrings(arr){
//     return arr.map(function(user){
//     if(user.age > 18){
//         return  user.name + " can go to the matrix"
//         }else{
//         return  user.name + " is underage!"
//         }
       
//     })
//   };

//   function makeStrings(arr){
//     return arr.map(user =>{
//     if(user.age > 18){
//         return user.name + ' can go to matrix'
//     }else{
//         return user.name + ' is under age !'
//     }
//     })
//   }
  

//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  
  //6) Make an array of the names in h1s, and the ages in h2s

// function readyToPutInTheDOM(arr){
// return arr.map(function(user){
//     return '<h1>' + user.name + '</h1>' + '<h2>' + user.age + '</h2>'
//     }
// )
// };
// function readyToPutInTheDOM(arr){
//     return arr.map(user => '<h1>' + user.name + '</h1>' + '<h2>' + user.age + '</h2>')
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// // ["<h1>Angelina Jolie</h1><h2>80</h2>",
// // "<h1>Eric Jones</h1><h2>2</h2>",
// // "<h1>Paris Hilton</h1><h2>5</h2>",
// // "<h1>Kayne West</h1><h2>16</h2>",
// // "<h1>Bob Ziroll</h1><h2>100</h2>"]





