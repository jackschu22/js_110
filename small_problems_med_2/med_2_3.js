/* JS110 Small Problems Medium 2.3:

Problem: A triangle is classified as follows:

	- Right: One angle is a right angle (exactly 90 degrees).
	- Acute: All three angles are less than 90 degrees.
	- Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every 
angle must be greater than 0. If either of these conditions is not satisfied, the 
triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns 
one of the following four strings representing the triangle's classification: 'right', 
'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about 
floating point errors. You may also assume that the arguments are in degrees.

Input: three numbers
Output: string

Data Structure: - array of side lengths (sorted in ascending order)

Algorithm: - helper functions
		    	- `isValid`
		    		- args: three numbers
		    		- sort numbers in ascending order
		  			- guard clause against angles <= 0	
		  		- `isRight`
		  			- args: three numbers
		  			- if one number === 90, return true
		  		- `isAcute` 
		  			- args: three numbers
		  			- store args in array, call `every` method
		  				- callback return: angle < 90
		   - if triangle isn't valid, return "invalid"
		   - if triangle is right, return "right"
		   - if triangle is acute, return "acute"
		   - return "obtuse"   
*/

function isValid(angle1, angle2, angle3) {
	let sortedAngles = [angle1, angle2, angle3].sort((a, b) => a - b);
	if (sortedAngles.some(angle => angle <= 0)) return false;
	return sortedAngles[0] + sortedAngles[1] + sortedAngles[2] === 180;
}

function isRight(angle1, angle2, angle3) {
	return angle1 === 90 || angle2 === 90 || angle3 === 90;
}

function isAcute(angle1, angle2, angle3) {
	return [angle1, angle2, angle3].every(angle => angle < 90);
}

function triangle(angle1, angle2, angle3) {
	if (!isValid(angle1, angle2, angle3)) return "invalid";
	if (isRight(angle1, angle2, angle3)) return "right";
	if (isAcute(angle1, angle2, angle3)) return "acute";
	return "obtuse";
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"