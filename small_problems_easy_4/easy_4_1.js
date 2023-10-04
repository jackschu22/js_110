/* Small Problems Easy 4.1

Write a program that solicits six numbers from the user and logs a message that 
describes whether the sixth number appears among the first five numbers. */

// import module to get user input
let rlSync = require('readline-sync');

// create empty array of user's numbers
let userNumbers = [];

// prompt user for six numbers and push five to userNumbers array
let num1 = rlSync.question('Enter the 1st number: ')
userNumbers.push(num1);
let num2 = rlSync.question('Enter the 2nd number: ')
userNumbers.push(num2);
let num3 = rlSync.question('Enter the 3rd number: ')
userNumbers.push(num3);
let num4 = rlSync.question('Enter the 4th number: ')
userNumbers.push(num4);
let num5 = rlSync.question('Enter the 5th number: ')
userNumbers.push(num5);

let num6 = rlSync.question('Enter the 6th number: ')

// search userNumbers array to see if sixth number is included
let numIncluded = userNumbers.includes(num6);

// print message to user
if (numIncluded) {
	console.log(`The number ${num6} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5},`);
} else {
	console.log(`The number ${num6} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5},`);
}