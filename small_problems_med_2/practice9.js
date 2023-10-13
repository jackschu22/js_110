// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.
/*
Input: string
Output: string (every 4th letter of 2nd word capitalized)

Data Structures: - arrray of words
				 - nested arrays of letters of each word

Algorithm: - split string into array of words
		   - iterate through array of words with `map` method, transform
		     each word into array of characters
		     [ant] => [a, n, t]
		   - iterate through each letter with `map` method, if the letter
		     is in an odd-indexed word subarray, return capitalized letter,
		     otherwise return letter as is
		   - join letters into words, join words into string
		   - return
*/

function toWeirdCase(string) {
	let words = string.split(' ');

	words = words.map(word => word.split(''));
	words = words.map((word, idx1) => {
		if (idx1 % 2 === 1) {
			word = word.map((letter, idx2) => {
				if ((idx2 + 1) % 4 === 0) return letter.toUpperCase();
				return letter;
			});
		}
		return word;
	});

	return words.map(word => word.join('')).join(' ');
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