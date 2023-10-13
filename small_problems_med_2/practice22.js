// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.
/*
Examples/Test Cases: 
- return null if input length < 5

Data Structures: 
- input: array of integers
- output: number (or null)

Algorithm: check inputs, return null if invalid. generate all sequences of 5 numbers from
input array and store in outer array. transform outer array's elements from sequences to
sums. sort array of sums in ascending order, return first element.

	- Main:
		- guard clause: if length of input < 5, return null
		- declare empty array `fives`
		- iterate through `arr` with for loop
			- start: i = 0
			- end: i = arr.length - 5
			- call `slice` on arr from 0 to i
				- push array to `fives`
		  end
		- declare array `sums`
		- call `map` method on `fives`, assign result to `sums`
			- in callback function call `reduce` on each element to get sum
		- sort `sums` in ascending order
		- return first element of `sums`
*/

function minimumSum(arr) {
	if (arr.length < 5) return null;

	let fives = [];

	for (let i = 0; i <= arr.length - 5; i++) {
		fives.push(arr.slice(i, i + 5));
	}

	let sums = fives.map(five => five.reduce((sum, num) => sum + num));
	sums.sort((a, b) => a - b);

	return sums[0];
;}

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".