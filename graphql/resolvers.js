const Deck = require('./models/Deck');
const Hand = require('./models/Hand');

const mainDeck = new Deck();
const table = mainDeck.dispatchCards(5);

const books = [
	{
		title: 'The Awakening',
		author: 'Kate Chopin',
	},
	{
		title: 'City of Glass',
		author: 'Paul Auster',
	},
];

const mappingCard = card => ({
	number: card.slice(0, -1),
	symbol: card.slice(-1)
});

module.exports = {
	Query: {
		books: () => books,
		table: () => {
			const mappedTable = table.map(mappingCard)
			return mappedTable
		},
		hand: () => {
			const newHand = new Hand(mainDeck, 2);
			const mappedHand = newHand.cards.map(mappingCard)
			return mappedHand
		}
	},
	Mutation: {
		addBook: (_, args) => {
			books.push(args)
			return args
		}
	}
};