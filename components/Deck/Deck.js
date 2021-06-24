import classes from "./Deck.module.scss";
import { getRandomTip } from "../../util/randomTip"

import { useEffect, useState } from "react";

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

export default function Deck({ path, title }) {
	const [deckCards, setDeckCards] = useState([]);
	const [handCards, setHandCards] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!path) return
		(async () => {
			const response = await fetch(`/api/${path}`);
			const data = await response.json();
			const timeout = setTimeout(() => {
				setDeckCards(data.deck);
				setHandCards(data.hand);
				setError(data.error || null);

				return () => {
					clearTimeout(timeout)
				}
			}, 3000)
		})();
	}, [path]);

	if (!error && (handCards.length === 0 && deckCards.length === 0)) {
		return <div>
			<h3>{title}</h3>
			<h2>Deck Cards</h2>
			<div className={classes.deck}>
				<h2>Loading...</h2>
			</div>
			<div className={classes.hand}>
				<h2>Loading...</h2>
			</div>
			<div className={classes.hand}>
				<h3>{getRandomTip()}</h3>
			</div>
		</div>
	}

	return (
		<div>
			<h2>{title}</h2>
			<div className={classes.deck}>{createHand(deckCards, false)}</div>
		</div>
	);
};
