/* JS110 Small Problems Easy 5.9:

Problem: Write a function that counts the number of occurrences of each element in a 
given array. Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").

Input: number
Output: array of numbers

Data Structure: - array of strings
				- object
					- keys: elements
					- values: counts

Algorithm: - declare empty object `elements`
		   - call `forEach` method on vehicles:
		   		- if vehicle is in `elements` object (elements[vehicle]):
		   			- elements[vehicle] += 1
		   			- else elements[vehicle] = 1
		   - log each entry in the object
		   		- Object.entries(elements).forEach()
		   			- console.log(`interpolated string`)
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
	let elements = {};

	arr.forEach(vehicle => {
		if (elements[vehicle]) {
			elements[vehicle] += 1;
		} else {
			elements[vehicle] = 1;
		}
	});

	Object.entries(elements).forEach(entry => {
		console.log(`${entry[0]} => ${entry[1]}`);
	})
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1