/* Small Problems Easy 4.10:

Write a function that takes a string of digits and returns the appropriate number 
as an integer. The string may have a leading + or - sign; if the first character 
is a +, your function should return a positive number; if it is a -, your function 
should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number. You may not use any 
of the standard conversion methods available in JavaScript, such as parseInt() and 
Number(). You may, however, use the stringToInteger() function from the previous lesson. */

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

function stringToSignedInteger(str) {
	switch (str[0]) {
		case "-":
			return -1 * stringToInteger(str.slice(1));
		case "+":
			return stringToInteger(str.slice(1));
		default:
			return stringToInteger(str);
	}
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true