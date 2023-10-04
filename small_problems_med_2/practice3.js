// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.
/*

Input: string
Output: string

Rules: convert every 4th character of every 2nd word (odd index) to uppercase

Data Structures: - array of arrays of characters

Algorithm: - split string into array of words
		   - split each word into an array of characters, resulting in nested arrays
		   	 [[w, e], [a, r, e], [h, e, r, e]]
		   - iterate over elements:
		   		- if index is odd, call map method on array of characters, capitalizing
				  every 4th character
		   - join characters into words
		   - join words into sentence
*/

function toWeirdCase(string) {
	let words = string.split(' ');

	words.forEach((word, idx) => {
		words[idx] = word.split('');
	});

	words.forEach((word, idx) => {
		if (idx % 2 === 1) {
			words[idx] = words[idx].map((char, idx) => {
				if ((idx + 1) % 4 === 0) return char.toUpperCase();
				return char;
			})
		}
	});

	words.forEach((word, idx) => {
		words[idx] = word.join('');
	})

	return words.join(' ');
}

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