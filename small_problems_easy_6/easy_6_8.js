/* JS110 Small Problems Easy 6.8:

Problem: Write a function that takes a string argument containing one or more words 
and returns a new string containing the words from the string argument. All 
five-or-more letter words should have their letters in reverse order. The string 
argument will consist of only letters and spaces. Words will be separated by a single 
space.

Input: string
Output: string

Data Structure: - array of words

Algorithm: 		- split input string into array of words
				- call `map` method on array of words
					- if length >= 5, split word into array of characters and reverse, join
				- join modified array into string
				- return string
*/

function reverseWords(sentence) {
	return sentence
		.split(' ')
		.map(word => {
			if (word.length >= 5) {
				return word.split('').reverse().join('')
			} else return word;
		})
		.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"