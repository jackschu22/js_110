/* Problem: Numerical Palindrome

A palindrome is a word, phrase, number, or other sequence of characters which reads 
the same backward as forward. Examples of numerical palindromes are:

      - 2332 
      - 110011 
      - 54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an 
array of s number of numerical palindromes that come after num. If num is a palindrome 
itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

Input: two numbers (unless not valid)
Output: array of numbers or "not valid"

Rules: - palindrome is same forwards and backwards
	   - return not valid of inputs arent numbers or less than 0
	   - if num input is a palindrome, include in count
	   - single digit palindromes are not palindromes

Data Structure: - array of strings

Algorithm: - helper function: `isPalindrome`
		   		- input: number
		   		- output: boolean
		   		- coerce number input to string
		   		- split string into array of chars, reverse
		   		- return true if reversed string === input string

		   - guard clause: if `num` or 's' isn't a number or is < 0, return "not valid"
		   - declare empty array `result`
		   - while length of `result` is less than s:
		   		- if num is palindrome, push to `result`
		   		- increment num
*/

function isPalindrome(num) {
	num = String(num);
	if (num.length < 2) return false;
	
	return num === num.split('').reverse().join('');
}

function palindrome(num, s) {
	if (typeof num !== 'number' || typeof s !== 'number' || num < 0 || s < 0) return 'Not valid';

	let result = [];

	while (result.length < s) {
		if (isPalindrome(num)) {
			result.push(num);
		}
		num += 1;
	}
	return result;
}

console.log(palindrome(6,4)); // [11,22,33,44]
console.log(palindrome(75,1)); // [77]
console.log(palindrome(101,2)); // [101,111]
console.log(palindrome(20,0)); // []
console.log(palindrome(0,4)); // [11,22,33,44]
console.log(palindrome("ACCDDCCA",3)); // "Not valid"
console.log(palindrome(773,"1551")); // "Not valid"
console.log(palindrome(-4505,15)); // "Not valid"
console.log(palindrome(4505,-15)); // "Not valid"