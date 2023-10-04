/* JS110 Small Problems Easy 6.7:

Problem: Write a function that takes a string argument and returns a new string 
containing the words from the string argument in reverse order.

Input: string
Output: string

Data Structure: - array of words

Algorithm: 		- split input string into array of words
				- call `reverse` method on array of words
				- join reversed array into string
				- return string
*/

function reverseSentence(sentence) {
	return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"