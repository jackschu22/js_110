/* JS110 Small Problems Easy 6.10:

Problem: Write a function that takes a string as an argument and returns true if all 
parentheses in the string are properly balanced, false otherwise. To be properly 
balanced, parentheses must occur in matching '(' and ')' pairs.

Input: string
Output: boolean

Data Structure: - array of chars

Algorithm: 	- declare counter, initialize to 0
			- split input string into array of chars
			- iterate through characters
				- if char === (, counter++
				- if char === ), counter--
				- if counter is ever neg (')' comes before '('), return false
			- return counter === 0
*/

function isBalanced(string) {
	let counter = 0;
	let words = string.split('')
	 
	 for (let i = 0; i < words.length; i++) {
		if (words[i] === '(') counter += 1;
		if (words[i] === ')') counter -= 1;
		if (counter < 0) return false;
	};

	return counter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);