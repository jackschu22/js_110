/* Small Problems Easy 4.11:

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and 
so on) to the string representation of that integer. You may not use any of the 
standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. Your function 
should do this the old-fashioned way and construct the string by analyzing and 
manipulating the number. */

function integerToString(int) {
	const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let str = "";

	do {
		let remainder = int % 10;
		int = Math.floor(int / 10);
		str = DIGITS[remainder] + str;
	} while (int > 0);

	return str;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"