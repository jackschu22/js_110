/*
Algorithm: iterate through input array and add each element to new array
				if index = start, push item1 to new array
		   		if index > start and <= (start + deleteCount), continue
		   		(this excludes "deleted" items fron new array)
		   - declare empty result array
		   -
*/


function splicee(arr, start, deleteCount, item1) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {

		if (item1 === undefined && i === start) {
			result.push(arr[i]);
			continue;
		}

		if (i === start) {
			result.push(item1);
			continue;
		}

		if (i > start && i < (start + deleteCount)) continue;

		result.push(arr[i]);
	}

	return result;
}

// TEST CASES 
console.log(splicee([1, 2, 3, 4, 5], 1, 2, 'a'));
let a = [1, 2, 3, 4, 5];
a.splice(1, 2, 'a');
console.log(a)

console.log(splicee([1, 2, 3, 4, 5, 6], 0, 4, 'splice!'));
let b = [1, 2, 3, 4, 5, 6];
b.splice(0, 4, 'splice!');
console.log(b);

console.log(splicee([7, 8, 9, 6, 5, 4], 2, 0));
let c = [7, 8, 9, 6, 5, 4];
c.splice(2, 0);
console.log(c);