/* JS110 Lesson 2: Practice Problem 16

Given the following data structure, write some code that defines an object where 
the key is the first item in each subarray, and the value is the second. */

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let result = {};

arr.forEach(subArr => {
	result[subArr[0]] = subArr[1];
})

console.log(result);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }