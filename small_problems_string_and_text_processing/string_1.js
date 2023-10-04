/* JS110 Small Problems String and Text Processing 1:

Problem: Write a function that takes a string argument and returns true if all of the 
alphabetic characters inside the string are uppercase; false otherwise. Ignore 
characters that are not alphabetic.


Input: string
Output: boolean

Data Structure: - array of characters in string input

Algorithm: - call `split('')` method on input string
		   - call `every` method on array of characters
		   		- condition to check: element === element.toUpperCase()
		   		- method returns a true if all are uppercase, false otherwise
*/

function isUppercase(string) {
	return string.split('').every(element => element === element.toUpperCase());
}

// can simplify this further by changing line 20 to the following:
//  return string === string.toUpperCase()

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true