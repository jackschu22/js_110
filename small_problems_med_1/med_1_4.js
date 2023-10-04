/* JS110 Small Problems Medium 1.3:

Problem: Write a function that takes a sentence string as an argument and returns 
that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding 
digit character.

Input: string
Output: string

Data Structure: - object with number word keys, number values


Algorithm: 	- declare object with number words
			- split string into array of words
			- call `map` method on array
				- if word is in numObj keys, return String(numObj[word])
				- else return word
			- join words into sentence and return
*/

function wordToDigit(string) {
	const NUM_WORDS = {zero: 0,
						one: 1,
						two: 2,
						three: 3,
						four: 4,
						five: 5,
						six: 6,
						seven: 7,
						eight: 8,
						nine: 9};

	return string.split(' ')
				 .map(word => {
				 	if (Object.keys(NUM_WORDS).includes(word)) {
				 		return NUM_WORDS[word];
				 	} else return word;
				 })
				 .join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."