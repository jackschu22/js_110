/* Write a function that returns true if its integer argument is palindromic, 
or false otherwise. A palindromic number reads the same forwards and backwards.

Input: Number
Output: Boolean

Alogrithm:
- operates the same as the previous palindrome exercises, but must first coerce arg
from number to string
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

function isPalindromicNumber(num) {
	return isPalindrome(String(num));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true