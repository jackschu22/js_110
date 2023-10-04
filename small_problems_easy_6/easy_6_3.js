/* JS110 Small Problems Easy 6.3:

Problem: Write a function that takes a positive integer as an argument and returns 
that number with its digits reversed.

Input: number
Output: number

Data Structure: - array of characters

Algorithm: 		- coerce input number to string
				- split string into array of characters
				- call `reverse` method on array
				- join array to string
				- return string coerced to number
*/

function reverseNumber(num) {
	let numCharArrayReversed = String(num).split('').reverse();
	let reversedNumString = numCharArrayReversed.join('');
	return Number (reversedNumString);


}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1