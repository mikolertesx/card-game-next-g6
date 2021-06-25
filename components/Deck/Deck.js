import classes from "./Deck.module.scss";
import Card from "../Card/Card";

const createHand = (cards, canBeFlipped = true) => {
	//Generate each.
	const cardElements = cards.map((card) => {
		const number = card.card.slice(0, -1);
		const symbol = card.card.slice(-1);
		const flipped = card.flipped;

		return (
			<Card
				key={`${symbol}-${number}`}
				number={number}
				symbol={symbol}
				isFlipped={flipped}
				canBeFlipped={canBeFlipped}
			/>
		);
	});

	return cardElements;
};

export default function Deck({ path, title, cards, flippable = false }) {

	return (
		<div>
			<h2>{title}</h2>
			<div className={classes.deck}>{createHand(cards, flippable)}</div>
		</div>
	);
};
