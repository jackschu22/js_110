/* JS110 Small Problems Easy 5.7:

Problem: Write a function that takes one argument, a positive integer, and returns a 
list of the digits in the number.

Input: number
Output: array of numbers

Data Structure: - array of strings
				- array of numbers

Algorithm: - coerce number input to string
		   - split string
		   - transform each character with `map`
		   		- callback return: Number(char)
		   - return
*/

function digitList(num) {
	return String(num)
		.split('')
		.map(char => Number(char));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]