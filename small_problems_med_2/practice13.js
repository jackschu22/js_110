/* In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for recursion, 
some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger 
nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Input: number (n)
Output: number
Data Structures: - array of fibonacci numbers

Algorithm: generate list of fibonacci numbers until list has n elements, return nth element

		   	- declare fibNums array with first two elements [1, 1]
		   	- while true
				- push sum of last two elements in array to end of array
				- if fibNums includes input num, return true
*/

function fibonacci(n) {
	let fibonacciNums = [1, 1];

	while (true) {
		elem1 = fibonacciNums[fibonacciNums.length - 1];
		elem2 = fibonacciNums[fibonacciNums.length - 2];

		fibonacciNums.push(elem1 + elem2);
		if (fibonacciNums.length === n) return fibonacciNums[n - 1];
	}
}

console.log(fibonacci(20) === 6765);       			   // 6765
console.log(fibonacci(50) === 12586269025);       	   // 12586269025
console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050