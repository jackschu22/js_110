/* Write a function that takes an array of numbers and returns an array with 
the same number of elements, but with each element's value being the running 
total from the original array.

Input: Array of Numbers
Output: Array of Numbers

Algorithm:
- declare variable `currentSum`, a number that is updated while iterating 
through argument array
- declare variable `currentSumArray`, which `currentSum` is pushed to each
time it is updated

*/

function runningTotal(arr) {
	let currentSum = 0;
	let currentSumArray = [];

	for (let i = 0; i < arr.length; i += 1) {
		currentSum += arr[i];
		currentSumArray.push(currentSum);
	}
	return currentSumArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Modify the previous solution using the `map` method
/*

- get number of blocks (blocksLeft)
- let layerNum = 1
- do we have enough to build row 1? (1 block)
	- if yes, put block in row 1, blocksLeft--, layerNum++
	- if no, return blocksLeft (0)
- do we have enough to build row 2? (blocksLeft >= 4 ? : blocksLeft -= 4, layerNum++; return blocksLeft)
	- if yes, put block in row 1, blocksLeft -= 4
	- if no, return blocksLeft
- do we have enough to build row 3? (blocksLeft >= 9 ? : blocksLeft -= 9, layerNum++; return blocksLeft)
	- if yes, put block in row 1, blocksLeft -= 4
	- if no, return blocksLeft