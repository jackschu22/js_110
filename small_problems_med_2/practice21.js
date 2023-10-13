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
Rules: - if multiple chars occur the same amount of times, return char that comes first
       - case-insensitive

Data Structures: - array of characters
				 - object containing characters and their counts

Algorithm: - coerce input string to lowercase and split into array of characters
		   - declare empty charCounts object
		   - for each char in the array
		   		- if it's present in the keys of charCounts, increment the corresponding 
		   		  value, else set charCounts[char] = 1
		   - create variable `entries` to store entries of `charCounts`
		   - sort `entries` by count (elem[1])
		   - return index 0 of first entry of sorted `entries` array

*/

function leastCommonChar(string) {
	let chars = string.toLowerCase().split('');
	let charCounts = {};

	for (let i = 0; i < chars.length; i++) {
		if (charCounts[chars[i]]) {
			charCounts[chars[i]] += 1;
		} else charCounts[chars[i]] = 1;
	}

	let sortedEntries = Object.entries(charCounts)
							  .sort((a, b) => a[1] - b[1]);
	console.log(sortedEntries);
	return sortedEntries[0][0];
}
// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".