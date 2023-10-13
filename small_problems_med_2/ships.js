// You have a 5 by 5 grid with multiple ships that do not touch. 
// Count the number of ships on the board. Ships are represented by 'S'. 
// There is at least one space between two ships. One ship can span two or more 
// rows/columns in one direction.
/*
Input: array of subarrays of strings
Output: number

Ship: character 'S' spanning two or more rows (continuously),
      either vertically OR horizontally
	  
	  board[row][column] === 'S'

Data Structures: - array of rows (board)
                 - row arrays

Algorithm: for each row of the board, if the left and top are NOT ships but the current
           space is, add a ship to the count
*/

function isShip(row, col) {
	if (row === undefined) return false;
	return row[col] === 'S';
}
function countShips(array) {
	let shipCount = 0;

	for (let i = 0; i < board.length; i++) {
		let row = board[i];
		let rowAbove = board[i - 1];

		for (let col = 0; col < row.length; col++) {
			let colLeft = col - 1;

			if (isShip(row, col) && !isShip(rowAbove, col) && !isShip(row, colLeft)) {
				shipCount += 1;
			}
		}
	}
	return shipCount;
}

let board = [
  ['S', 'S', '', 'S', ''],
  ['', '', '', '', ''],
  ['S', '', '', 'S', ''],
  ['', '', '', 'S', ''],
  ['S', 'S', '', 'S', ''],
]; // 5

console.log(countShips(board) === 5);