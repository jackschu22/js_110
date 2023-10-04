/* JS110 Small Problems Interpretive Problem Solving 2:

Problem: Write a function that displays a four-pointed diamond in an nxn grid, 
where n is an odd integer supplied as an argument to the function. You may assume 
that the argument will always be an odd integer.
*/

function diamond(n) {
	const SPACE = ' ';
	const STAR = '*';

	for (let i = 1; i < n; i++) {
		console.log(SPACE.repeat(n - i) + STAR.repeat(i) + STAR.repeat(i - 1));
	}


	console.log('');
}

diamond(1);
diamond(3);
diamond(5);