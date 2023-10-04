/* JS110 Small Problems Easy 5.12:

Problem: As seen in the previous exercise, the time of day can be represented as the 
number of minutes before or after midnight. If the number of minutes is positive, the 
time is after midnight. If the number of minutes is negative, the time is before 
midnight.

Write two functions that each take a time of day in 24 hour format, and return the 
number of minutes before and after midnight, respectively. Both functions should return 
a value in the range 0..1439.

Input: string
Output: number

Data Structure:  

Algorithm: - parse integers from input
		   - call `slice` method to extract `hr`, `min`
		   - guard clauses to handle edge cases at 00:00 and 24:00
		   - calculate and return `minRemaining`/`minAfter`
*/

const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MIN_IN_DAY = MIN_IN_HOUR * HOUR_IN_DAY;

function beforeMidnight(time) {
	let hr = Number.parseInt(time.slice(0, 2));
	let min = Number.parseInt(time.slice(3, 5));

	while (hr >= HOUR_IN_DAY) {
		hr -= HOUR_IN_DAY;
	}

	if (hr + min === 0) return 0;

	let minRemaining = MIN_IN_DAY - hr * MIN_IN_HOUR - min;

	return minRemaining;
}

function afterMidnight(time) {
	let hr = Number.parseInt(time.slice(0, 2));
	let min = Number.parseInt(time.slice(3, 5));

	while (hr >= HOUR_IN_DAY) {
		hr -= HOUR_IN_DAY;
	}
	
	if (hr + min === 0) return 0;

	let minAfter = hr * MIN_IN_HOUR + min;
	
	return minAfter;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);