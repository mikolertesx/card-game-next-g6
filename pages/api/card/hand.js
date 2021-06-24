import Deck from '../../../models/Deck'
import Hand from '../../../models/Hand'

let globalDeck = new Deck();
const table = globalDeck.dispatchCards(5);

function mapCard(cards, flipped) {
	return cards.map(card => ({
		card,
		flipped
	}))
}

export function getCards() {
	const hand = new Hand(globalDeck, 2)

	const data = {
		deck: mapCard(table, false),
		hand: mapCard(hand.cards, true),
	}

	return data
}

export default function handler(req, res) {
	const data = getCards()
	return res.json(data)
}
