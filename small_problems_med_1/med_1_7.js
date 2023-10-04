/* JS110 Small Problems Medium 1.7:

Problem: Write a recursive function that computes the nth Fibonacci number, where nth 
is an argument passed to the function.

Input: num
Output: num

Data Structure: - number


Algorithm: 	- base case: if num is 1 or 2 return 1
			- return fibonacci(num - 1) + fibonacci(num - 2)
*/

function fibonacci(num) {
	if (num === 1 || num === 2) return 1
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765