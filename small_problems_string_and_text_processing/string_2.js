/* JS110 Small Problems String and Text Processing 2:

Problem: Write a function that takes an array of strings and returns an array of the 
same string values, but with all vowels (a, e, i, o, u) removed.

Input: array of strings
Output: array of strings

Data Structure: - arrays of strings

Algorithm: - call `map` method on input to transform each string
		   		- callback function return: string with vowels filtered out
		   			- split element into array of characters
		   			- call filter method on each array of characters
		   				- callback function return: boolean (char isn't a vowel)
		   					- `!'aieouAEIOU'.includes(element)`
		   			- join filtered array of chars (no vowels)
*/

function removeVowels(arrStrings) {
	return arrStrings.map(string => {
		return string.split('')
					 .filter(char => !'aeiouAEIOU'.includes(char))
					 .join('');
	})
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]