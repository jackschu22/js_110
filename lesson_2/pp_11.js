/* JS110 Lesson 2: Practice Problem 9

Given the following data structure, use the map method to return a new array 
identical in structure to the original but, with each number incremented by 1. Do 
not modify the original data structure. */

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
	let modifiedObj = {};
	for (let key in obj) {
		modifiedObj[key] = obj[key] + 1;
	}
	return modifiedObj;
})

console.log(arr);