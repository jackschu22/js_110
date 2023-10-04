// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:
/*
   Data Structures: - array of characters
   					- object with character counts

   Algorithm: iterate over array of characters, store counts in object, return character
   			  with lowest count
*/

function leastCommonChar(string) {
	let chars = string.toLowerCase().split('');
	let charCounts = {};

	chars.forEach(char => {
		if (!charCounts[char]) {
			charCounts[char] = 1;
		} else charCounts[char]++;
	});

	let lowestFrequency = 100000;
	let entries = Object.entries(charCounts);
	
	for (let i = 0; i < entries.length; i++) {
		if (entries[i][1] === 1) return entries[i][0];
		if (entries[i][1] < lowestFrequency) lowestFrequency = entries[i][1];
	}
	for (let i = 0; i < entries.length; i++) {
		if (entries[i][1] === lowestFrequency) return entries[i][0];
	}
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".