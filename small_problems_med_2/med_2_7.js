/* JS110 Small Problems Medium 2.7:

Problem: Write a function that takes an array as an argument and sorts that array 
using the bubble sort algorithm described above. The sorting should be done 
"in-place" — that is, the function should mutate the array. You may assume that 
the array contains at least two elements.

Input: array of arguments (string/numbers)
Output: sorted array of arguments

Data Structure: - arrays

Algorithm: 		- declare boolean `swapMade` to keep track of whether loop should execute
				  and initialize to false
				- generic `while` loop
					- iterate through array input with 'for` loop
		   				- if element[idx] > element[idx +1] 
		   					- store first element in temp variable
		   					- assign second element to first element
		   					- assign temp variable (first element) to second element
		   					- `swapMade` === true;
		   				- else `swapMade` === false;
				- return array
*/

function bubbleSort(arr) {

	while (true) {
		let swapMade = false

		for (let idx = 0; idx < arr.length; idx++) {
			if (arr[idx] < arr[idx + 1]) continue;

			if (arr[idx] > arr[idx + 1]) {
				let temp = arr[idx];
				arr[idx] = arr[idx + 1];
				arr [idx + 1] = temp;
				swapMade = true;
			}
		}

		if (!swapMade) break;
	}
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]