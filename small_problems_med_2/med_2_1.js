/* JS110 Small Problems Medium 2.1:

Problem: Write a function that takes a string and returns an object containing the 
following three properties:

	- the percentage of characters in the string that are lowercase letters
	- the percentage of characters that are uppercase letters
	- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Input: string
Output: object { lowercase: _._%, uppercase: _._%, neither: _._% }

Data Structure: object

Algorithm: - helper functions
				- isUppercase
				- isLowercase
		   - declare/initialize object `caseCounts`: { lowercase: 0, uppercase: 0, neither: 0 }
			    - split input string into array of characters
			    - call `forEach` method on array of characters
		            - callbackfunction: if isUpperCase, result['uppercase'] += 1
			   		   else if isLowerCase, result['uppercase'] += 1
			   		   else, result['neither'] += 1
			   			    - refactored to ommit else in favor of guard clause
		   - iterate through keys in `caseCounts` with `for/in` loop:
		   		- replace each integer value in `caseCounts` with a percentage
		   			- format with `toFixed(2)`
 
*/

function isUppercase(char) {
	return char >= 'A' && char <= 'Z';
}

function isLowercase(char) {
	return char >= 'a' && char <= 'z';
}

function letterPercentages(string) {
	let caseCounts = { lowercase: 0, uppercase: 0, neither: 0};
	let characters = string.split('');

	if (string.length === 0) return { lowercase: '0.00%', uppercase: '0.00%', neither: '0.00%'};
		
	characters.forEach(char => {
		if (isUppercase(char)) {
			caseCounts.uppercase += 1;
			return;
		}
		if (isLowercase(char)) {
			caseCounts.lowercase += 1;
			return;
		}
			caseCounts.neither += 1;
	});

	for (let key in caseCounts) {
		let percentage = 100 * caseCounts[key] / string.length;
		caseCounts[key] = percentage.toFixed(2);
	}

	return caseCounts;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }