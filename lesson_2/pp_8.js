/* JS110 Lesson 2: Practice Problem 8

Using the forEach method, write some code to output all vowels from the strings in 
the arrays. Don't use a for or while loop. */

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = 'aeiouAEIOU';

Object.values(obj).forEach((element) => {
	element.forEach((word) => {
		let lettersArray = word.split('');
		let vowels = lettersArray.filter(letter => VOWELS.includes(letter)).join('');
		console.log(vowels);
	})
})



// Object.values(obj)
//		  0                  1               2                    3
// [['the', 'quick'], ['brown', 'fox'], ['jumped'], ['over', 'the', 'lazy', 'dog']]
