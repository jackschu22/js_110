/* JS110 Small Problems List Processing 8:

Problem: Write a function that takes a grocery list in a two-dimensional array and 
returns a one-dimensional array. Each element in the grocery list contains a fruit 
name and a number that represents the desired quantity of that fruit. The output array 
is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return 
an array that contains 3 apples, 1 orange, and 2 bananas.

Input: 2-D array
Output: 1-D array

Data Structure: - an array of arrays (input)
				- an array (output)

Algorithm: - declare empty array `result`
		   - iterate through input array with `for` loop
		   - enter new `for` loop:
		   		- while i < input[i][1]: push input[i][0] to `result`
		   - return `result` sorte
*/

function buyFruit(listOfFruit) {
	let result = [];

	for (let j = 0; j < listOfFruit.length; j++) {
		for (let i = 0; i < listOfFruit[j][1]; i++) {
			result.push(listOfFruit[j][0]);
		}
	}

	return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// logs ["apple", "apple", "apple", "orange", "banana", "banana"]