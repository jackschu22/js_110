// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.
/*

Input: array of integers
Output: number/null

Data Structures: input array, array of sums

Algorithm: - guard clause: if length of input array < 5, return null
		   
		   - declare empty array of sums
		   - iterate through input array with for loop
		   - use slice method to select subarrays of length 5
		   - call reduce method to get sums of subarrays
		   - push the sums of those subarrays to sums array
		   - return minimum element of result array
*/

function minimumSum(arr) {
	if (arr.length < 5) return null;

	let sums = [];

	for (let i = 0; i < arr.length - 4; i++) {
		let sum = arr.slice(i, i + 5).reduce((sum, num) => sum + num);
		sums.push(sum);
	}
	
	let minimumSum = 100000000000000000000;
	sums.forEach(sum => {
		if (sum < minimumSum) {
			minimumSum = sum;
		}
	});

	return minimumSum;
}
// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".