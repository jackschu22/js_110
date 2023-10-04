/* JS110 Small Problems Easy 5.1:

Problem: Write a function that takes a floating point number representing an angle 
between 0 and 360 degrees and returns a string representing that angle in degrees, 
minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a 
single quote (') to represent minutes, and a double quote (") to represent seconds. 
There are 60 minutes in a degree, and 60 seconds in a minute.

Input: number
Output: string

Data Structure: 

Algorithm: - declare constants representing conversion factors
		   - convert input float to integer for `degreesInt`
		   - convert remainder of subtracting floatdeg - intdeg to minutes
		   - convert remainder of minutes to seconds
		   - return concatenated string of each element
		   - padZeroes function to add 0's to numeric elements less than 10
		   		i.e 30 deg 9' 1" -> 30 deg 09' 01"
*/

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function padZeroes(number) {
    let numString = String(number);
    return numString.length < 2 ? ('0' + numString) : numString;
}

function dms(degreesFloat) {
	let deegreesInt = Math.floor(num);
	let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
    let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE);

    return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"