/* JS110 Small Problems List Processing 6:

Problem: Write a function that returns a list of all palindromic substrings of a 
string. That is, each substring must consist of a sequence of characters that reads 
the same forward and backward. The substrings in the returned list should be sorted 
by their order of appearance in the input string. Duplicate substrings should be 
included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.
For the purpose of this exercise, you should consider all characters and pay attention 
to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In 
addition, assume that single characters are not palindromes.


Input: string
Output: array of strings [str1, str2, str3...]

Data Structure: - arrays of characters to manipulate strings
				- array of strings as output

Algorithm: *using `leadingSubstrings` and `substrings`*
		    - declare function `isPalindrome` to be able to check if each substring is
			  a palindrome
			  	- return boolean if input === input reversed (split, reverse, join)
			  		- case-sensitive
			- declare function `palindromes' that calls `substrings` and filters out
			  all results that aren't palindromes or are single characters
			  	- return filtered array of palindromic substrings
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

function isPalindrome(str) {
	return str === str.split('').reverse().join('');
}

function palindromes(str) {
	return substrings(str).filter(substr => isPalindrome(substr) && substr.length > 1);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]