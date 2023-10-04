/* JS110 Small Problems Medium 1.6:

Problem: Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number 
has an index of 1)

Input: num
Output: num

Data Structure: - array of fibonacci numbers


Algorithm: 	- array of fibonacci numbers
*/

function findFibonacciIndexByLength(targetLength) {
	let fibonacciNums = [1, 1];
	let currentIndex = 1;

	do {
		fibonacciNums[currentIndex + 1] = fibonacciNums[currentIndex] 
									+ fibonacciNums[currentIndex - 1];
		currentIndex++;
	} while (String(fibonacciNums[currentIndex]).length < targetLength);
	console.log(currentIndex + 1);
	return currentIndex + 1;
}

console.log(findFibonacciIndexByLength(2) === 7);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3) === 12);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);
//console.log(findFibonacciIndexByLength(100n) === 476n;
//console.log(findFibonacciIndexByLength(1000n) === 4782n;
//console.log(findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.