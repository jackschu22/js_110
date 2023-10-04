/* JS110 Small Problems Easy 5.10:

Problem: Write a function that takes one argument, an array of integers, and 
returns the average of all the integers in the array, rounded down to the integer 
component of the average. The array will never be empty, and the numbers will always 
be positive integers.

Input: array of numbers
Output: number

Data Structure: - array of numbers

Algorithm: - call `reduce` method on input array `arr`
		   		- callback args: sum, num
		   		- callback return: sum + num
		   - divide return value by `arr.length`
		   - round down with Math.floor()
		   - return
*/

function average(arr) {
	return Math.floor(arr.reduce((sum, num) => sum + num) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40