/* JS110 Small Problems Easy 6.1:

Problem: Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.

Input: string
Output: string

Data Structure: - array of characters

Algorithm: 		- split input string into array of characters
				- call `map` method on array and concatenate each entry with itself
				- join array entries to string
				- return
*/

function repeater(string) {
	return string
		.split('')
		.map(char => char + char)
		.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""