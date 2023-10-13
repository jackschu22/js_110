/* 
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs 
that exist between the two arrays. The returned array should be sorted in ascending 
numerical order. You may assume that neither argument will be an empty array.

Input: two arrays of numbers
Output: array of numbers

Data Structures: arrays of numbers

Algorithm: - iterate through length of first array with for loop
		   - iterate through length of second array with nested for loop
		   - push each product to new array
		   - sort and return new array
*/

function multiplyAllPairs(arr1, arr2) {
	let products = [];

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			products.push(arr1[i] * arr2[j]);
		}
	}
	return products.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]