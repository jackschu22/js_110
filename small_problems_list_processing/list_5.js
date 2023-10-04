/* JS110 Small Problems List Processing 5:

Problem: Write a function that returns a list of all substrings of a string. Order 
         the returned list by where in the string the substring begins. This means 
         that all substrings that start at index position 0 should come first, then 
         all substrings that start at index position 1, and so on. Since multiple 
         substrings will occur at each position, return the substrings at a given 
         index from shortest to longest. You may (and should) use the leadingSubstrings 
         function you wrote in the previous exercise

Input: string
Output: array of strings [str1, str2, str3...]

Data Structure: - empty `result` array to push string values to
				- empty `strings` array to populate with different lengths of original string

Algorithm: - declare empty array and populate with substrings of input string with increasing
			 starting index (each entry loses a starting character)
				- i.e 'hello' --> ['hello', 'ello', 'llo', 'lo', 'o']
		   - call `leadingSubstrings` on each entry of the array
		   		- arr -> [['h', 'he', 'hel', 'hell', 'hello'],
		   				  ['e', 'el', 'ell', 'ello'],
		   				  ['l', 'll', 'llo'] 
		   				   ... 
		   				 ]
		   - `concat` arrays together in order
*/

function leadingSubstrings(str) {
	let result = [];

	for (let i = 1; i <= str.length; i++) {
		result.push(str.substring(0, i));
	}

	return result;
}

function substrings(str) {
	let strings = [];
	let result = []

	for (let i = 0; i < str.length; i++) {
		strings.push(str.substring(i));
		result.push(leadingSubstrings(strings[i]));
	}

	return [].concat(...result);
}

console.log(substrings('abcde'));

/* returns:     [ "a", "ab", "abc", "abcd", "abcde",
				  "b", "bc", "bcd", "bcde",
				  "c", "cd", "cde",
				  "d", "de",
				  "e" ]
*/