/* JS110 Lesson 2: Practice Problem 9

Given the following data structure, return a new array with the same structure, 
but with the values in each subarray ordered -- alphabetically or numerically as 
appropriate -- in ascending order. */

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subarray => {
	if (typeof subarray[0] === 'string') {
		return subarray.slice().sort();
	} else {
		return subarray.slice().sort((a, b) => a - b)
	}
})

console.log(arr);