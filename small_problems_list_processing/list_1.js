/* JS110 Small Problems List Processing 1:

Problem: Write a function that takes one argument, a positive integer, and returns the sum of 
		 its digits. Do this without using for, while, or do...while loops - instead, use a 
		 series of method calls to perform the sum. 


Data Structure: arrays of characters and numbers

Algorithm: *using only method calls*
		   - convert integer input to string
		   - `split` method: convert string to array of characters
		   - `map` method: convert array of characters to array of numbers
		   - `reduce` method: reduce array of numbers to sum of its values
*/

function sum(int) {
	return String(int)
			.split('')
			.map(num => Number(num))
			.reduce((acc, curr) => acc + curr);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45