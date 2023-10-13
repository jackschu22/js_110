// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
/*
Input: array of numbers
Output: array of numbers

Algorithm: iterate through input array. for each number, count how many other 
		   numbers are smaller, keeping track of what's been counted. store the 
		   counts in an array and return.

		   - declare empty array `result`
		   - iterate through input array with for loop
		   		- declare empty array `countedNums`
		   		- declare count, initialize to 0
		   		- iterate through array again with nested for loop
		   			- if arr[j] isn't in countedNums && is < arr[i], count++
		   			  and push arr[j] to countedNums
		   		- push count to result
		   - return result
*/

function smallerNumbersThanCurrent(arr) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
		let countedNums = [];
		let count = 0;

		for (let j = 0; j < arr.length; j++) {
			if (!countedNums.includes(arr[j]) && arr[j] < arr[i]) {
				countedNums.push(arr[j]);
				count += 1;
			}
		}
		result.push(count);
	}
	return result;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]