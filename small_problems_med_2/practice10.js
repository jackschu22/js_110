// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.
/*
Input: array of numbers
Ouput: array of numbers (2 selected from the input array)

Data Structures: - arrays of numbers

Algorithm: - iterate through input array with nested for loops
		   - store all pairs of entries in subarray in new array
		   - for every pair, assign abs value ofdifference to idx 1 
		   of subarray containing pair
   
           [[[5, 25], 20], [[5, 15], 10], [[5, 11], 6]...]
		
		   - call sort method to sort entries in ascending order by difference (idx 1)
		   - call filter method to remove entries with difference of 0 (duplicates)
		   - return pair at index 0 of first subarray in sorted pairs array
*/

function closestNumbers(arr) {
	let pairs = [];

	arr.forEach(num1 => {
		arr.forEach(num2 => {
			pairs.push([[num1, num2], Math.abs(num1 - num2)]);
		});
	});

	let filteredPairs = pairs.filter(entry => entry[1]);
	return filteredPairs.sort((a, b) => a[1] - b[1])[0][0];
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]