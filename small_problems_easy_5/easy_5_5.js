/* JS110 Small Problems Easy 5.5:

Problem: Write a function that combines two arrays passed as arguments, and returns 
a new array that contains all elements from both array arguments, with each element 
taken in alternation. You may assume that both input arrays are non-empty, and that 
they have the same number of elements.

Input: two arrays
Output: one array

Data Structure: arrays

Algorithm: - declare empty `result` array
		   - iterate through both arrays simulatenously with `for` loop
		   - push `arr1[i]` and `arr2[i]` to `result`
		   - return `result`
*/

function interleave(arr1, arr2) {
	let result = []

	for (let i = 0; i < arr1.length; i++) {
		result.push(arr1[i], arr2[i]);
	}

	return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]