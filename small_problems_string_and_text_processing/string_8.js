/* JS110 Small Problems String and Text Processing 8:

Problem: Write a function that takes a string as an argument and returns an array that 
contains every word from the string, with each word followed by a space and the word's 
length. If the argument is an empty string or if no argument is passed, the function 
should return an empty array. You may assume that every pair of words in the string 
will be separated by a single space.

Input: string
Output: array of strings

Data Structure: - array of strings (after calling `split` method)
				- array of strings [words[i] words[i].length, ...]

Algorithm: - split string input into array of words
		   - call `map` method on array of words
		   		- callback function return:
		   			- `${element} ${element.length}`
*/

function wordLengths(str) {
	if (str === undefined || str.length === 0) return [];

	return str.split(' ')
		.map(elem => `${elem} ${elem.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []