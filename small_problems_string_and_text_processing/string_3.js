/* JS110 Small Problems String and Text Processing 3:

Problem: Write a function that takes a string and returns an object containing three 
properties: one representing the number of characters in the string that are lowercase 
letters, one representing the number of characters that are uppercase letters, and one 
representing the number of characters that are neither.

Input: string
Output: object: { lowercase: _, uppercase: _, neither: _ }

Data Structure: - array of characters
				- object with counts of lower-/uppercase letters/other characters

Algorithm: - helper functions
				- isUppercase
				- isLowercase
		   - declare/initialize object `result`: { lowercase: 0, uppercase: 0, neither: 0 }
		   - split input string into array of characters
		   - call `forEach` method on array of characters
		   		- callbackfunction: if isUpperCase, result['uppercase'] += 1
		   							else if isLowerCase, result['uppercase'] += 1
		   							else, result['neither'] += 1
		   								- refactored to ommit else in favor of guard clause
*/

function isUppercase(char) {
	return char >= 'A' && char <= 'Z';
}

function isLowercase(char) {
	return char >= 'a' && char <= 'z';
}

function letterCaseCount(string) {
	let result = { lowercase: 0, uppercase: 0, neither: 0 };
	let characters = string.split('');

	if (string.length === 0) return result;
		
	characters.forEach(char => {
		if (isUppercase(char)) {
			result.uppercase += 1;
			return;
		}
		if (isLowercase(char)) {
			result.lowercase += 1;
			return;
		}
			result.neither += 1;
	});

	return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }