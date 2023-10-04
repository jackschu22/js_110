/* JS110 Small Problems Easy 5.11:

Problem: The time of day can be represented as the number of minutes before or after 
midnight. If the number of minutes is positive, the time is after midnight. If the 
number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time 
of day in 24 hour format (hh:mm). Your function should work with any integer input.

Input: number
Output: string 

Data Structure:  

Algorithm: - write helper function `padZeroes` to maintain format hh:mm
		   - declare consts `MIN_IN_HOUR`, `HOUR_IN_DAY`, `MIN_IN_DAY`
		   - while input < 0, input = MIN_IN_DAY + input
		   - if input > MIN_IN_DAY, input = remainder
		   - divide input by `MIN_IN_HOUR` to get number of hours
		   		- round with Math.floor()
		   		- assign result to `hr`
		   - modulo divide input by `MIN_IN_HOUR` to get number of minutes
		   		- round with Math.floor()
		   		- assign result to `min`
		   - return interpolated string
*/

function padZeroes(num) {
	let numString = String(num);
	if (numString.length < 2) {
		return `0${numString}`
	}
	return num;
}

function timeOfDay(minutes) {
	const MIN_IN_HOUR = 60;
	const HOUR_IN_DAY = 24;
	const MIN_IN_DAY = MIN_IN_HOUR * HOUR_IN_DAY;
	
	while (minutes < 0) {
		minutes = MIN_IN_DAY + minutes;
	}

	if (minutes > MIN_IN_DAY) {
		minutes = minutes % MIN_IN_DAY;
	}

	let hr = Math.floor(minutes / MIN_IN_HOUR);
	let min = Math.floor(minutes % MIN_IN_HOUR);

	return `${padZeroes(hr)}:${padZeroes(min)}`
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");