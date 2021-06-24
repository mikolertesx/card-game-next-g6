class Hand {
	cards = [];
	constructor(deck, size) {
		this.cards = deck.dispatchCards(size);
	}
}

export default Hand;
