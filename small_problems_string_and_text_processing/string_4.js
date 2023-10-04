/* JS110 Small Problems String and Text Processing 4:

Problem: Write a function that takes a string as an argument and returns that string 
with the first character of every word capitalized and all subsequent characters in 
lowercase. You may assume that a word is any sequence of non-whitespace characters.

Input: string (words separated by spaces)
Output: string (capitalized words separated by spaces)

Data Structure: - array of characters

Algorithm: - split input string into array of words
		   		- phrase.split(' ')
		   - call `map` method on array of words
		   		- reassign first char to char.toUpperCase()
		   - re-join array of words into capitalized phrase
*/

function wordCap(words) {
  return words
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'