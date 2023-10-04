/* JS110 Small Problems Medium 1.2:

Problem: Write a function that rotates the last count digits of a number. To perform 
the rotation, move the first of the digits that you want to rotate to the end and 
shift the remaining digits to the left.

Input: two numbers
Output: number

Data Structure: - array

Algorithm: 	- coerce number input to string
			- split string into array of chars
			- slice and rotate rotate last [count] chars
			- concat first [length - count] chars with rotated chars
			- coerce to number and return
*/

function rotateRightmostDigits(num, count) {
	chars = String(num);
	charArr = chars.split('');
	rotatedChars = rotateArray(charArr.slice(charArr.length - count)).join('');
	return Number(chars.slice(0, chars.length - count) + rotatedChars);
}

function rotateArray(arr) {
	if (!Array.isArray(arr)) return undefined;
	return arr.slice(1).concat(arr[0]);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917