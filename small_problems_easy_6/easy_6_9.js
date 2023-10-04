/* JS110 Small Problems Easy 6.9:

Problem: Write a function that takes an Array as an argument and reverses its 
elements in place. That is, mutate the Array passed into this method. The return 
value should be the same Array object.

You may not use Array.prototype.reverse().

Input: array
Output: array

Data Structure: - array

Algorithm: 	value:	| 1 | 2 | 3 | 4 |     | a | b | c | d | e |
			index:	| 0 | 1 | 2 | 3 |     | 0 | 1 | 2 | 3 | 4 |

			- iterate through array with `for` loop from i = 0 while i < arr.length / 2
			- assign arr[i] to temp variable
			- assign arr[arr.length - 1 - i] to arr[i]
			- assign temp variable to arr[arr.length - 1 - i]
			- return arr
*/

function reverse(arr) {
	for (let i = 0; i < arr.length / 2; i++) {
		let temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true