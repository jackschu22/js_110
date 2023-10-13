/* Write function to find the longest common prefix string in an array of strings

Input: array of strings
Output: string (empty if no common prefix string)

Data Structures: - arrays of strings
				 - arrays of prefixes (leading substrings)

Algorithm: helper function leadingSubstrings:
				input: string
				output: array of strings
				declare empty substrings array
		   		iterate through length of string with for loop
		   		call slice method on string, iterating end index

		   generate all leading substrings for each string in input array, store
		   in an array for each string
		   iterate through each element of a single substring array
		   		if element is present in both other substring arrays, store in new
		   		array `commonPrefixes`
		   sort common prefixes by length in descending order and return first element
*/

function leadingSubstrings(str) {
	let substrings = [];

	for (let i = 1; i <= str.length; i++) {
		let substring = str.slice(0, i);
		substrings.push(substring);
	}
	return substrings;
}

function commonPrefix(arr) {
	let prefixes = []

	arr.forEach(word => {
		prefixes.push(leadingSubstrings(word));
	});

	let commonPrefixes = [];

	for (let i = 0; i < prefixes.length; i++) {
		prefixes[i].forEach(prefix => {
			if (prefixes.every(list => list.includes(prefix))) {
				commonPrefixes.push(prefix);
			}
		});
	}
	
	if (commonPrefixes.length === 0) return '';

	return commonPrefixes.sort((a, b) => b.length - a.length)[0];
}

let a = ['flower', 'flow', 'flight'];
let b = ['dog', 'racecar', 'car'];
let c = ['interspecies', 'interstellar', 'interstate'];
let d = ['throne', 'throne'];

console.log(commonPrefix(a));
console.log(commonPrefix(b));
console.log(commonPrefix(c));
console.log(commonPrefix(d));