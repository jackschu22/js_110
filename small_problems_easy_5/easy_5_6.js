/* JS110 Small Problems Easy 5.6:

Problem: Write a function that takes an array of integers as input, multiplies all of 
the integers together, divides the result by the number of entries in the array, and 
returns the result as a string with the value rounded to three decimal places.

Input: array of numbers
Output: string

Data Structure: array

Algorithm: - call `reduce` method on input array
		   		- callback args: (num, product)
		   		- callback return: num * product
		   - calculate multiplicative avg: divide return value of `reduce` by length 
		     of input array
		   - coerce calculated average to string rounded to 3 decimals: call 
		     `toFixed(3)` method on calculated average
		   - return
*/

function multiplicativeAverage(arr) {
	let average = arr.reduce((num, product) => num * product) / arr.length;
	return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"