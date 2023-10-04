/* JS110 Small Problems Easy 5.2:

Problem: Write a function that takes two arrays as arguments and returns an array 
containing the union of the values from the two. There should be no duplication of 
values in the returned array, even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays.

Input: two arrays
Output: one array

Data Structure: arrays

Algorithm: - write helper function to remove duplicates
		   		- `filter` method on input
		   			- callback function return:
		   				- if the element is the first occurence in the array, 
		   				  return true (idx of curr element is <= idx of first 
		   				  occurence returned by `indexOf` method)
		   				- else return undefined (falsy) -> duplicate excluded 
		   				  from returned arr
		   - concat two arrays, remove duplicates, return
*/

function union(arr1, arr2) {
	return removeDuplicates(arr1.concat(arr2));
}

function removeDuplicates(arr) {
	return arr.filter((elem, idx) => {
		if (idx <= arr.indexOf(elem)) {
			return true;
		}
	});
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]