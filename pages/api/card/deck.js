import Deck from '../../../models/Deck'

export default function handler(req, res) {
	const newDeck = new Deck();

	const data = {
		hand: [],
		deck: newDeck.cards.map(card => ({
			card,
			flipped: false,
		}))
	}

	return res.json(data)
}
