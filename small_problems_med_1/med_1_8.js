/* JS110 Small Problems Medium 1.8:

Problem: Rewrite your recursive fibonacci function so that it computes its results 
without using recursion.



Input: num
Output: num

Data Structure: - array of numbers


Algorithm: 	- 
*/

function fibonacci(num) {
	let fibonacciNums = [1, 1];
	let currentIndex = 1;

	do {
		fibonacciNums[currentIndex + 1] = fibonacciNums[currentIndex] 
									+ fibonacciNums[currentIndex - 1];
		currentIndex++;
	} while (currentIndex < num - 1);
	return fibonacciNums[currentIndex];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050