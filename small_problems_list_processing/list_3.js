/* JS110 Small Problems List Processing 3:

Problem: Write a function that takes two array arguments, each containing a list of 
		 numbers, and returns a new array containing the products of all combinations 
		 of number pairs that exist between the two arrays. The returned array should 
		 be sorted in ascending numerical order. You may assume that neither argument 
		 will be an empty array.

Input: (arr1, arr2)
Output: newArr

Data Structure: empty array that we can push results of multiplication to

Algorithm: - call `forEach` method on arr1 to iterate through every value
		   - in callback function of `forEach`, call `forEach` again on each
		     element of arr2
		   - in callback function of inner `forEach` method call, multiply
		     elem1 by elem2
		   - push result of multiplication to `result` array
		   - call sort method on `result` to sort in ascending order (a - b)
		   - return result
*/

function multiplyAllPairs(arr1, arr2) {
	let result = [];

	arr1.forEach(elem1 => {
		arr2.forEach(elem2 => {
			result.push(elem1 * elem2);
		})
	})

	return result.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]