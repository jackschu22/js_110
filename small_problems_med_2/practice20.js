// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.
/*
Input: array of numbers (indefinite length)
Output: array of numbers (length of 2)

Data Structures: - array of numbers
				 - array of nested arrays of pairs of numbers

Algorithm: find all combinations of pairs of numbers in input array. sort pairs by
           the absolute value of their difference. filter out pairs where numbers are
           equal. select first pair in sorted and filtered array

           - declare empty array `pairs`
           - nested for loop to iterate through all combinations, store in `pairs`
		   - filter out pairs where first entry === second entry
		   - call sort method on filtered array to sort by the absolute value
		     of the pairs difference
		   - return first entry
*/

function closestNumbers(arr) {
	let pairs = [];

	arr.forEach(num1 => {
		arr.forEach(num2 => {
			pairs.push([num1, num2]);
		});
	});

	pairs = pairs.filter(pair => pair[0] !== pair[1]);

	pairs.sort((a, b) => {
		let diffA = Math.abs(a[0] - a[1]);
		let diffB = Math.abs(b[0] - b[1]);

		if (diffA < diffB) return -1;
		if (diffA > diffB) return 1;
		if (diffA === diffB) return 0;
	})
	return pairs[0];
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]