/* Small Problems Easy 4.7:

Modify the wordSizes function from the previous exercise to exclude non-letters when 
determining word size. For instance, the word size of "it's" is 3, not 4. */

function wordSizes(string) {
	const filteredString = string.replace(/[^a-zA-Z ]/g, "");
	let wordsArr = filteredString.split(' ').filter(char => char !== ' ');
	let wordSizesObj = {};

	wordsArr.forEach(word => {
		let length = word.length;
		if (wordSizesObj.hasOwnProperty(length)) {
			wordSizesObj[length] += 1;
		} else {
			wordSizesObj[length] = 1;
		}
	})
	return wordSizesObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}