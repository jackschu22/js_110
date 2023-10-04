/* JS110 Twenty-One:

Problem: Build a game called Twenty-One, similar to Blackjack but stripped down a bit.

    Deck: Start with a standard 52-card deck consisting of the 4 suits (Hearts, 
	Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, 
	Queen, King, Ace).

	Goal: The goal of Twenty-One is to try to get as close to 21 as possible without 
	going over. If you go over 21, it's a bust, and you lose.

	Setup: The game consists of a dealer and a player. Both participants are initially 
	ealt a hand of two cards. The player can see their 2 cards, but can only see one of 
	the dealer's cards.

	Player turn: The player always goes first, and can decide to either hit or stay. 
	A hit means the player wants to be dealt another card. Remember, if his total 
	exceeds 21, he will bust and lose the game. The decision to hit or stay depends 
	on the player's cards and what the player thinks the dealer has. For example, if 
	the dealer is showing a "10" (the other card is hidden), and the player has a "2" 
	and a "4", then the obvious choice is for the player to hit. The player can 
	continue to hit as many times as they want. The turn is over when the player 
	either busts or stays. If the player busts, the game is over, and the dealer won.

	Dealer turn: When the player stays, it's the dealer's turn. The dealer must follow 
	a strict rule for determining whether to hit or stay: hit until the total is at 
	least 17. If the dealer busts, then the player wins.

	Comparing cards: When both the player and the dealer stay, it's time to compare the 
	total value of the cards and see who has the highest value.

Examples/Test Cases: 
	


Data Structures:
	- Deck: Array with 13 elements (cards)
		- each element is an object {card: 'Ace', value: [1, 11], remaining: 4}


Algorithm:
	1. Initialize deck
	2. Deal cards to player and dealer
	3. Player turn: hit or stay
	   - repeat until bust or stay
	4. If player bust, dealer wins.
	5. Dealer turn: hit or stay
	   - repeat until total >= 17
	6. If dealer busts, player wins.
	7. Compare cards and declare winner.

Code:
*/

function initializeDeck() {
	let deck = [
		{card: '2', value: 2, remaining: 4},
		{card: '3', value: 3, remaining: 4},
		{card: '4', value: 4, remaining: 4},
		{card: '5', value: 5, remaining: 4},
		{card: '6', value: 6, remaining: 4},
		{card: '7', value: 7, remaining: 4},
		{card: '8', value: 8, remaining: 4},
		{card: '9', value: 9, remaining: 4},
		{card: '10', value: 10, remaining: 4},
		{card: 'Jack', value: 10, remaining: 4},
		{card: 'Queen', value: 10, remaining: 4},
		{card: 'King', value: 10, remaining: 4},
		{card: 'Ace', value: [1, 11], remaining: 4},
	]
	return deck;
}

function total(cards) {
  // cards = [['H', '3'], ['S', 'Q'], ... ]
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  // correct for Aces
  values.filter(value => value === "A").forEach(card => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}