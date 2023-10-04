/* JS110 Small Problems String and Text Processing 5:

Problem: Write a function that takes a string as an argument and returns that string 
with every lowercase letter changed to uppercase and every uppercase letter changed 
to lowercase. Leave all other characters unchanged.

Input: string
Output: string

Data Structure: - array of characters

Algorithm: - helper functions:
		   		- isUppercase
		   		- isLowercase
		   - split input string into array of characters
		   - call `map` method to transform each character
		   		- callback function:
					- if isUppercase(char), return char.toLowerCase()
					- else if isUppercase(char), return char.toLowerCase()
					- else return char
		   - re-join and return transformed array as string
*/

function isUppercase(char) {
	return char >= 'A' && char <= 'Z';
}

function isLowercase(char) {
	return char >= 'a' && char <= 'z';
}

function swapCase(string) {
	return string
		.split('')
		.map(char => {
			if (isUppercase(char)) {
				return char.toLowerCase();
			} else if (isLowercase(char)) {
				return char.toUpperCase();
			} else return char;
		})
		.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"