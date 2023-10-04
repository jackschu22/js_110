/* JS110 Small Problems Easy 5.7:

Problem: Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair of numbers 
from the arguments that have the same index. You may assume that the arguments 
contain the same number of elements.

Input: two arrays of numbers
Output: one array of numbers

Data Structure: arrays

Algorithm: - declare empty `result` array
		   - iterate through arr1
		   		result. push(arr1[i] * arr2[i])
		   - return `result`
*/

function multiplyList(arr1, arr2) {
	let result = [];

	for (let i = 0; i < arr1.length; i++) {
		result.push(arr1[i] * arr2[i]);
	}
	return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]