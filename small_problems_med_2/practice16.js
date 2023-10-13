/* Given a non-empty string check if it can be constructed by taking a substring of it
and appending multiple copies of the substring together

Input: string
Output: boolean

Data Structures: - array of substrings

Algorithm: - find all the substrings of the given input string
		   		- find all leading substrings
		   		- find all substrings of leading substrings (substring method)
		   - iterate through each substring
		   		- while the length of the current substring <= length of input / 2
		   		  		append the substring to itself, check if it equals input string
		   		  		if it does, return true
		   - return false
*/

function repeatedSubstringPattern(str) {
	let leadingSubstrings = [];
	let substrings = [];

	for (let i = 2; i <= str.length; i++) {
		let substring = str.slice(0, i);
		leadingSubstrings.push(substring);
	}

	for (let i = 0; i < leadingSubstrings.length; i++) {
		for (let j = 0; j < leadingSubstrings[i].length; j++) {
			let substring = leadingSubstrings[i].substring(j);
			substrings.push(substring);
		}
	}

	substrings = substrings.filter(substr => substr.length <= (str.length / 2));

	for (let i = 0; i < substrings.length; i++) {
		let substr = substrings[i];
		let unit = substrings[i];

		while (substr.length <= str.length) {
			substr = substr.concat(unit);
			if (substr === str) return true;
		}
	}
	return false;
}

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("abcabcabc") === true);
console.log(repeatedSubstringPattern("") === false);