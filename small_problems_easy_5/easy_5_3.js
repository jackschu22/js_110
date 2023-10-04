/* JS110 Small Problems Easy 5.3:

Problem: Write a function that takes an array as an argument and returns an array 
that contains two elements, each of which is an array. Put the first half of the 
original array elements in the first element of the return value, and put the second 
half in the second element. If the original array contains an odd number of elements, 
place the middle element in the first half array.

Input: 1-D array
Output: 2-D array

Data Structure: arrays

Algorithm: - declare two empty arrays
		   - iterate through input array
		   - if idx < half of length, push to arr1
		   - else push to arr2
		   - return [arr1, arr2]
*/

function halvsies(arr) {
	let arr1 = [];
	let arr2 = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length / 2) {
			arr1.push(arr[i]);
			continue;
		}		
		arr2.push(arr[i]);
	}
	return [arr1, arr2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]