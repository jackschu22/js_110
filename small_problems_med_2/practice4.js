// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.
/*
Data Structures: array of numbers

Algorithm: - declare empty array `counts`
		   - iterate through array w/ for loop
		   		- declare empty array `countedNums` with nums that have been counted
		   		- iterate through each comparison w/ nested for loop
		   			- if countedNums includes element, continue
		   			- if inner element < outer element, increment counts
		   - return counts
*/

function smallerNumbersThanCurrent(arr) {
	let counts = [];
	for (let i = 0; i < arr.length; i++) counts.push(0);

	arr.forEach((num1, idx) => {
		let countedNums = [];

		arr.forEach(num2 => {
			if (!countedNums.includes(num2)) {
				countedNums.push(num2);
				if (num2 < num1) counts[idx]++;
			}
		})
	})
	return counts;
 }

 function smallerNumbersThanCurrent2(arr) {
	let counts = [];
	for (let i = 0; i < arr.length; i++) counts.push(0);

	for (let i = 0; i < arr.length; i++) {
		let countedNums = [];
		for (let j = 0; j < arr.length; j++) {
			if (countedNums.includes(arr[j])) continue;
			countedNums.push(arr[j]);
			if (arr[j] < arr[i]) {
				counts[i]++;
			}
		}
	}
	return counts;
 }

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]

console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent2([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent2([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent2([1])); // [0]
