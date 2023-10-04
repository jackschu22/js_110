/* Small Problems Easy 4.2

Write a function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and backwards. 
For this problem, the case matters and all characters matter.

Input: String
Output: Boolean

Algorithm:
- Divide input string into two halves, reverse the second half, and compare.
	- split, join, reverse methods
- If the input string has an odd length, ignore the middle charcter.

*/

function isPalindrome(phrase) {
	let firstHalf = '';
	let secondHalf = '';

	if (phrase.length % 2 === 0) {
		firstHalf = phrase.slice(0, phrase.length / 2);
	  secondHalf = phrase.slice(phrase.length / 2).split('').reverse().join('');
	} else {
		firstHalf = phrase.slice(0, (phrase.length + 1) / 2);
		secondHalf = phrase.slice((phrase.length - 1) / 2).split('').reverse().join('');
	}
	return firstHalf === secondHalf;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true