/* Practice writing a function to generate all the substrings of a string

Input: string
Output: array of strings (substrings of input string)

Data Structures: - array of leading substrings
				 - array of all substrings

Algorithm: - declare empty arrays `leadingSubstrings` and `substrings`
		   - iterate through length of `str` with `for` loop
		   		- call slice on str from 0 to i, push to `leadingSubstrings`
		   - iterate through each string in `leadingSubstrings` array
		   		- iterate through the length of each string
		   			- call substring method on each string, push to `substrings` array
		   - return `substrings` array
*/

function substrings(str) {
	let leadingSubstrings = [];
	let substrings = [];

	for (let i = 1; i <= str.length; i++) {
		leadingSubstrings.push(str.slice(0, i));
	}

	for (let i = 0; i < leadingSubstrings.length; i++) {
		for (let j = 0; j < leadingSubstrings[i].length; j++) {
			substrings.push(leadingSubstrings[i].substring(j));
		}
	}
	return substrings;
}

console.log(substrings('jack'));
console.log(substrings('sarah'));