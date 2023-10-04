/* JS110 Small Problems List Processing 9:

Problem: Write a function that takes two arguments, an inventory item ID and a list 
of transactions, and returns an array containing only the transactions for the 
specified inventory item.


Input: inventory item ID, list of transactions (array of objects)
Output: list of transactions (array of objects)

Data Structure: - arrays of objects

Algorithm: - return result of calling `filter` method on list of transactions
				- check that `id` property === `idNum` input
*/

function transactionsFor(idNum, list) {
	return list.filter(entry => entry.id === idNum);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]