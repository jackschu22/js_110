/* JS110 Small Problems Easy 6.5:

Problem: Write a function that takes a string argument consisting of a first name, 
a space, and a last name, and returns a new string consisting of the last name, a 
comma, a space, and the first name.

Input: string
Output: string

Data Structure: - array of words

Algorithm: 		- split input string into array at the space character
				- reverse array
				- join array into string with comma
				- return
*/

function swapName(name) {
	return name
		.split(' ')
		.reverse()
		.join(', ');

}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"