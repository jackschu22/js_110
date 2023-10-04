function joinOr(arr) {
	let result = '';

	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 2) {
			return `${arr[0]} or ${arr[1]}`;
		}
		if (i < arr.length - 2) {
			result += `${arr[i]}, `;
		} else if (i === arr.length - 2) {
			result += `${arr[i]}, or `;
		} else {
			result += String(arr[i]);
		}
	}
	return result;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
let arr3 = [1];
let arr4 = [1, 2];

let result1 = joinOr(arr1);
console.log(result1);

let result2 = joinOr(arr2);
console.log(result2);

let result3 = joinOr(arr3);
console.log(result3);

let result4 = joinOr(arr4);
console.log(result4);
