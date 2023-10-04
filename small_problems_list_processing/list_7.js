/* JS110 Small Problems List Processing 7:

Problem: Write a function that takes an array of numbers and returns the sum of the 
sums of each leading subsequence in that array. Examine the examples to see what we 
mean. You may assume that the array always contains at least one number.


Input: array of numbers
Output: number

Data Structure: - arr1 (input: array of numbers)
				- arr2 (array containing increasingly truncated copies of arr1)

Algorithm: - declare empty array (arr2)
		   - populate arr2 with truncated copies of arr1
		   		- `for` loop and `slice` method
		   - reduce each of the inner arrays
		   		- `forEach` and `reduce` methods
		   - reduce and return outer array
*/

function sumOfSums(arr) {
	let result = [];

	for (let i = 1; i <= arr.length; i++) {
		result.push(arr.slice(0, i));
	}

	for (let i = 0; i < result.length; i++) {
		result[i] = result[i].reduce((sum, num) => sum + num);
	}

	return result.reduce((sumOfSums, sum) => sumOfSums + sum);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35