/* JS110 Small Problems Medium 1.5:

Problem: The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) 
such that the first two numbers are 1 by definition, and each subsequent number is the 
sum of the two previous numbers. Fibonacci numbers often appear in mathematics and 
nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an 
incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,
915,075—that's enormous, especially considering that it takes six iterations just to 
find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number 
that has the number of digits specified by the argument. (The first Fibonacci number 
has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Input: number
Output: number

Data Structure: - array of numbers


Algorithm: 	- declare array of fibonacci numbers beginning with [1, 1]
			- while the length of the last number in the array is less than
			  the length argument supplied to the function, iterate through
			  the array with a `for` loop and assign new element, index++
*/

function findFibonacciIndexByLength(targetLength) {
	let fibonacciNums = [1, 1];
	let currentIndex = 2;

	while (String(fibonacciNums[fibonacciNums.length - 1]).length < targetLength) {
		fibonacciNums[currentIndex] = fibonacciNums[currentIndex - 1] + fibonacciNums[currentIndex - 2];
		currentIndex++;
	}

	return currentIndex;
}

console.log(findFibonacciIndexByLength(2) === 7);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3) === 12);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);
//console.log(findFibonacciIndexByLength(100) === 476);
//console.log(findFibonacciIndexByLength(1000) === 4782);
//console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.