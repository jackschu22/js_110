/* JS110 Small Problems List Processing 2:

Problem: Write a function that takes an array of integers between 0 and 19 and returns 
         an array of those integers sorted based on the English word for each number

Data Structure: array of English words for each number with corresponding index

Algorithm: - declare array of of english words, each string corresponds to index
		   - call sort method on input arr
		       - sort in ascending order by comparing the string value entry of the 
		         `nums` array whose index is equal to the current entry in the input 
		         array
*/

function alphabeticNumberSort(arr) {
	let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
				'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
				'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

	return arr.sort((a, b) => {
		if (nums[a] > nums[b]) {
			return 1;
		} else if (nums[a] < nums[b]) {
			return -1;
		} else return 0;
	});
};

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]