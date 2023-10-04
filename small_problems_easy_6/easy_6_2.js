/* JS110 Small Problems Easy 6.2:

Problem: Write a function that takes a string, doubles every consonant character in 
the string, and returns the result as a new string. The function should not double 
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Input: string
Output: string

Data Structure: - array of characters

Algorithm: 		- helper function `isConsonant`
					- take string input, if 'CONSONANTS' includes input, return true
				- split string input into array of characters
				- call `map` method on array
					- if char is consonant, return char concatenated with itself
					- otherwise return char
				- join array entries to string
				- return
*/

function isConsonant(char) {
	const CONSONANTS = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM';
	return CONSONANTS.includes(char);
}

function repeater(string) {
	return string
		.split('')
		.map(char => {
			if (isConsonant(char)) return char + char;
			return char;
		})
		.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
