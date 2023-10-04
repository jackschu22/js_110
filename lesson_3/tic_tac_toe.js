/* JS110 Lesson 3: Tic-Tac-Toe

Problem: Creating a turn-based tic tac toe game that a user can play against a computer

Examples/Test Cases:

Data Structures: 
	- `board` object

Algorithm:
	- Display the initial empty 3x3 board.
	- Ask the user to mark a square.
	- Computer marks a square.
	- Display the updated board state.
	- If it's a winning board, display the winner.
	- If the board is full, display tie.
	- If neither player won and the board is not full, go to #2
	- Play again?
	- If yes, go to #1
	- Goodbye!

Code:
*/

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
	console.clear();
	console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

    console.log('');
    console.log('     |     |');
    console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
    console.log('     |     |');
    console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = ' ';
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

let rlSync = require('readline-sync');

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

function playerChoosesSquare(board) {
	let square;

	while (true) {
		prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
		square = rlSync.question().trim();

		if (emptySquares(board).includes(square)) break; 
        prompt("Sorry, that's not a valid choice.");
        
	}
	board[square] = HUMAN_MARKER;

}

function computerChoosesSquare(board) {
	let square = emptySquares(board)[Math.floor((Math.random() * emptySquares(board).length))];
	board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
	return emptySquares(board).length === 0;
}

function someoneWon(board) {
    return !!detectWinner(board);
}

function detectWinner(board) {
	let winningLines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],   // rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9],   // columns
        [1, 5, 9], [3, 5, 7]               // diagonals
      ];

    for (let line = 0; line < winningLines.length; line++) {
    	let [ sq1, sq2, sq3 ] = winningLines[line];

    	if (
            board[sq1] === HUMAN_MARKER &&
            board[sq2] === HUMAN_MARKER &&
            board[sq3] === HUMAN_MARKER
    ) {
        return 'Player';

      } else if (
            board[sq1] === COMPUTER_MARKER &&
            board[sq2] === COMPUTER_MARKER &&
            board[sq3] === COMPUTER_MARKER
    ) {
        return 'Computer';
    }
  }
    return null;
}

while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

    displayBoard(board);

    if (someoneWon(board)) {
        prompt(`${detectWinner(board)} won!`);
    } else {
        prompt("It's a tie!");
    }

    prompt('Play again? (y or n)');
    let answer = rlSync.question().toLowerCase()[0];
    if (answer[0] !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');