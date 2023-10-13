/*

You are given an array of strings and an integer k. Your task is to return the first 
longest string consisting of k consecutive strings taken in the array.
n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Input: - array of strings
       - integer
Output: - string

Data Structures: - array of strings

Algorithm: helper functions:
		   - generateStrings
		   		- input: array, integer
		   		- ouput: array
		   		- declare empty array
		   		- iterate through input array
		   
		   - if arr.length is 0 or k > length or k <= 0, return ""
		   - generate combinations of strings according to k (remain in order)
		   		- iterate through input array with for loop
		   		- use slice method from index to index + k
		   		- join into string and push to array
		   - iterate through new list of strings with forEach to find longest string's length
		   - use find method to return first string in list with that length
*/

function longestConsec(arr, k) {
	if (arr.length === 0 || k > arr.length || k <= 0) return "";
	let newStrings = [];

	for (let i = 0; i < arr.length + 1 - k; i++) {
		let newString = arr.slice(i, i + k).join('');
		newStrings.push(newString);
	}

	let longestLength = 0;
	newStrings.forEach(string => {
		if (string.length > longestLength) {
			longestLength = string.length;
		}
	});

	return newStrings.find(string => string.length === longestLength);
}

// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true