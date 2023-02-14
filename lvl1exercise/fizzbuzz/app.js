// FizzBuzz is the must know coding challenge. 

// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

// ### **Example:**

// 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect.


// 1.whats the problem? 
// print 1-100 on a new line. for each multiple of 3 print fizz and for each multiple of 5 print buzz and for every multiple of both ex 15 print fizzbuzz
//2. plan
//created code to count to 100 then use an if statement to implement the multiples of 3,5 and both. for loop to get the 100 then push into array?



for(i = 1; i <= 100; i++){
    if(i % 3 === 0 ){
       console.log("fizz")
    }else if(i % 5 === 0 ){
        console.log("buzz")
    }else if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }else{
        console.log(i)
    }
    }
    
//console.log(numbers)

// for (i = 1; i < 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz')
//     } else if (i % 5 === 0) {
//       console.log('buzz')
//     } else if (i % 3 === 0) {
//       console.log('fizz')
//     } else {
//       console.log(i)
//     }
//   }



