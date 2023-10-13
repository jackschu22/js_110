// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.
/*
Problem: transform string so that every 4th letter of every 2nd word is capitalized
	- input: string
	- output: string
	- rules: capitalize every 4th letter of every 2nd word

Examples/Test Cases:

Data Structures: - array of words
				 - arrays of characters

Algorithm: - split string into array of words
		   - transform each word into an array of characters with `map` method
		   		[[L, o, r, e, m], [I, p, s, u, m] ...]
		   - iterate over array of words again with map method
		   		- if idx is even, return element
		   		- if idx is odd, iterate over array of characters with map method
		   			- if (idx + 1) % 4 === 0, return char capitalized
		   			- else return char
		   - join chars into words
		   - join words into sentence
		   - return
*/

function toWeirdCase(string) {
	let words = string.split(' ');
	words = words.map(word => word.split(''));

	words = words.map((word, outerIdx) => {
		if (outerIdx % 2 === 0) return word;

		return word.map((letter, idx) => {
			if ((idx + 1) % 4 === 0) return letter.toUpperCase();
			return letter;
		});
	});

	words = words.map(word => word.join(''));

	return words.join(' ');
}
// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".