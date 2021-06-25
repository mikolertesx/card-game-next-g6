class Hand {
	cards = [];
	constructor(deck, size) {
		this.cards = deck.dispatchCards(size);
	}
}

module.exports = Hand;
