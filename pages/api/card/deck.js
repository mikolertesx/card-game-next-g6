import Deck from '../../../models/Deck'

export function getDeck() {
	const newDeck = new Deck();

	return newDeck.cards.map(card => ({
		card,
		flipped: false,
	}))
}

export default function handler(req, res) {
	const newDeck = new Deck();

	const data = {
		deck: getDeck()
	}

	return res.json(data)
}
