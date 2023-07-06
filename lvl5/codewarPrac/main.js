// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// function toCamelCase(str) {
//     const words = str.replace(/[-_]/g, ' ').split(' ');
//     const capitalizedWords = words.map((word, index) => {
//         if (index === 0 && word.charAt(0) === word.charAt(0).toUpperCase()) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//         }else if(index === 0){
//         return word.toLowerCase();
//         }else {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//         }
//     });
//     return capitalizedWords.join('');
//     }
// console.log(toCamelCase("the-stealth-warrior")); 

// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2 returns 2 because the sequence contains only one number, which is 2 itself.
// 2,6,2 --> 12 (2 + 4 + 6) returns 12 because the sequence consists of the numbers 2, 4, and 6, which sum up to 12.
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)  returns 15 because the sequence includes the numbers 1, 2, 3, 4, and 5, resulting in a sum of 15.
// 1,5,3  --> 5 (1 + 4)  returns 5 because the sequence contains the numbers 1 and 4, and the step of 3 does not reach 5, so it is not included in the sum. Thus, the sum is 1 + 4 = 5.

const sequenceSum = (begin, end, step) => {
if(begin > end){ //The function begins with a conditional statement if (begin > end) to check if the begin value is greater than the end value. If this condition is true, it means there are no integers to sum, so the function returns 0.
    return 0 
}
let sum = 0
for(i = begin; i<= end; i += step){//The function then enters a for loop, starting from the begin value and continuing as long as i (the loop variable) is less than or equal to the end value. In each iteration, the loop increments i by the step value.
sum += i //Within the loop, the current value of i is added to the sum variable using the expression sum += i. This accumulates the sum of the integers in the sequence.
}
return sum //Once the loop completes, the function returns the final value of sum, which represents the sum of the sequence.
};
console.log(sequenceSum(1,5,1))