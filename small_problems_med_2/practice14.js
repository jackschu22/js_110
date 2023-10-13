// given two strings, find if there is a substring that appears in both strings
// return true if so, false otherwise
// we only care about substrings longer than one letter
/*
Data Structures: - an array of substrings for each input

Algorithm: helper function: findSubstrings
		   		- input: string
		   		- output: array of substrings
		   		- declare empty array for substrings
		   		- leading substrings: iterate through length of string,  
		   		  incrementing index in slice method call, adding substrings to array
		   		- iterate through substrings in other direction, slice and push to array
		   		- filter out substrings with length < 2
		   		- return array of substrings

		   - generate an array of str1's substrings and an array of str2's subtrings
	       - call forEach method on arr1, nested forEach on arr2
	       		- if elem1 equals elem2 return true
	       - return false
*/

function findSubstrings(str) {
	str = str.toLowerCase();
	let leadingSubstrings = [];
	let substrings = [];

	for (let i = 2; i <= str.length; i++) {
		let substring = str.slice(0, i);
		leadingSubstrings.push(substring);
	}

	leadingSubstrings.forEach(leadingSubstring => {
		for (let i = 0; i <= str.length; i++) {
		let substring = leadingSubstring.substring(i);
		substrings.push(substring);
	}
	});
	return substrings.filter(substring => substring.length > 1);
}

function subTest(str1, str2) {
	let substr1 = findSubstrings(str1);
	let substr2 = findSubstrings(str2);
	console.log(substr1);
	console.log(substr2);

	for (let i = 0; i < substr1.length; i++) {
		for (let j = 0; j < substr2.length; j++) {
			if (substr1[i] === substr2[j]) return true;
		}
	}
	return false;
}

console.log(subTest('asdfghjk', 'asd'));
console.log(subTest('asdfghjk', 'bot'));
console.log(subTest('Something', 'Home'));
console.log(subTest('123465', '54123765'));
