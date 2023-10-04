// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*

Data Structures: - array of integers
				 - array where each element is a nested array with two elements: 
				   [[a, b], Math.abs(a-b)]

Algorithm: - iterate through input array, put every combination of ints into new array
		   - iterate through new array, add entry for the abs value of each 
		     combination's difference
		   - sort array by the element representing the difference
		   - return element at first index of first two entries
*/

function closestNumbers(arr) {
	let combinations = [];

	for (let i = 0; i < arr.length ; i++) {
		for (let j = 1; j < arr.length; j++) {
			combinations.push([[arr[i], arr[j]]]);
		}
	}
	
	for (let i = 0; i < combinations.length; i++) {
		combinations[i][1] = Math.abs(combinations[i][0][0] - combinations[i][0][1]);
	}

	combinations.sort((a, b) => a[1] - b[1]);
	combinations = combinations.filter(elem => elem[1] !== 0);
	
	return combinations[0][0];
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
