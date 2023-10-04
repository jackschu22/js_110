/* JS110 Small Problems List Processing 4:

Problem: Write a function that takes a string argument and returns a list of 
		 substrings of that string. Each substring should begin with the first 
		 letter of the word, and the list should be ordered from shortest to longest.

Input: string
Output: array of strings [str1, str2, str3]

Data Structure: empty `result` array to push string values to

Algorithm: - `for` loop to iterate through string, incrementing idx by 1 until equal 
			  to string length
		   - call `substring` method with incrementing index, push new string to `result`
		   - return `result` once `for` loop finishes

*/

function leadingSubstrings(str) {
	let result = [];

	for (let i = 1; i <= str.length; i++) {
		result.push(str.substring(0, i));
	}

	return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]