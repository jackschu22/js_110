/* Small Problems Easy 4.9:

Write a function that takes a string of digits and returns the appropriate number as 
an integer. You may not use any of the methods mentioned above. For now, do not worry 
about leading + or - signs, nor should you worry about invalid characters; assume all 
characters will be numeric. You may not use any of the standard conversion methods 
available in JavaScript, such as String() and Number(). Your function should do this 
the old-fashioned way and calculate the result by analyzing the characters in the 
string. */

function stringToInteger(string) {
	const DIGITS = {
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9
	};

	let stringDigits = string.split('');
	let num = 0;
	let numPlace = 1;

	for (let i = stringDigits.length - 1; i >= 0; i -= 1) {
		num += ((10) ** (numPlace - 1)) * DIGITS[stringDigits[i]];
		numPlace += 1;
	}
	return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true