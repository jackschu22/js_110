/* Small Problems Easy 4.3

Write another function that returns true if the string passed as an argument is a 
palindrome, or false otherwise. This time, however, your function should be case-
insensitive, and should ignore all non-alphanumeric characters. If you wish, you may 
simplify things by calling the isPalindrome function you wrote in the previous exercise.

Input: String
Output: Boolean

Rules:
- case-insensitive
- ignore non-alphanumeric characters (0-9 and A-Z only)

Algorithm:
- as before, compare first and second half of phrase with isPalindrome
- new function cleanPhrase to remove non-alphanumeric characters and coerce to lowercase
- pass result of cleanPhrase to isPalindrome
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

function cleanPhrase(phrase) {
	let phraseArr = phrase.toLowerCase().split();
	let cleanArr = [];

	for (let i = 0; i < phraseArr.length; i += 1) {
		if (phraseArr[i].match(/^[0-9a-z]+$/)) {
			cleanArr.push(phraseArr[i]);
		}
	}
	return cleanArr.join();
}

function isRealPalindrome(phrase) {
	return isPalindrome(cleanPhrase(phrase));
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false