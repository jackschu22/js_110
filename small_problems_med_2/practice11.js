// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.
/*
Input: string
Output: string (single char)

Data Structures: Strings, Numbers, Object

Algorithm: - split input string (lowercase) into array of characters
		   - declare empty letterCount object
		   - iterate through each letter in the array
		   		- if it is present in the keys of the
		   		  letterCount obj, increment value
		   		- else assign letterCount[char] = 1
		   - find min value in object values
		   - return the associated property/key

*/

function leastCommonChar(string) {
	let chars = string.toLowerCase().split('');
	let letterCount = {};

	chars.forEach(char => {
		let keys = Object.keys(letterCount);
		if (keys.includes(char)) {
			letterCount[char] += 1;
		} else letterCount[char] = 1;
	});

	let minCount = 10000;
	Object.values(letterCount).forEach(count => {
		if (count < minCount) {
			minCount = count;
		}
	});
	
	let entries = Object.entries(letterCount);
	for (let i = 0; i < entries.length; i++) {
		if (entries[i][1] === minCount) return entries[i][0];
	}
}
// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".