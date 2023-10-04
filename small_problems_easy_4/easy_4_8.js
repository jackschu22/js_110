/* Small Problems Easy 4.8:

Given a string of words separated by spaces, write a function that swaps the 
first and last letters of every word. You may assume that every word contains at 
least one letter, and that the string will always contain at least one word. You 
may also assume that each string contains nothing but words and spaces, and that 
there are no leading, trailing, or repeated spaces. */

function swap(string) {
	
	let wordsArray = string.split(' ');

	for (let i = 0; i < wordsArray.length; i += 1) {
		let word = wordsArray[i];
		let lettersArray = word.split('');
		let firstLetter = lettersArray[0];
		lettersArray[0] = lettersArray[lettersArray.length - 1];
		lettersArray[lettersArray.length - 1] = firstLetter;
		wordsArray[i] = lettersArray.join('');
	}

	return wordsArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"