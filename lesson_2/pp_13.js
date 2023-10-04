/* JS110 Lesson 2: Practice Problem 13

Given the following data structure, sort the array so that the sub-arrays are ordered 
based on the sum of the odd numbers that they contain. */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
	let oddA = a.filter(elem => elem % 2 === 1);
	let oddASum = oddA.reduce((acc, currValue) => acc + currValue);
	let oddB = b.filter(elem => elem % 2 === 1);
	let oddBSum = oddB.reduce((acc, currValue) => acc + currValue;

	return oddASum - oddBSum;
})

console.log(arr);