import { useState } from "react";

import classes from "./Card.module.scss";
import CSS from '../../util/joinClass';
import CardsImage from "./Cards.png";
import CardBackImage from "./CardCover.png";

const nonNumbers = ["A", "J", "Q", "K"]

const getFixedSize = (number) => {
	return nonNumbers.findIndex(inNumber => number === inNumber) !== -1 ? 1 : +number
}

const getCardUrl = (number) => {
	return number === "J" || number === "Q" || number === "K" ? CardsImage : ""
}

const Card = ({ number, symbol, canBeFlipped = true, isFlipped = true }) => {
	const [currentFlip, setCurrentFlip] = useState(isFlipped);

	const onClickCardHandler = () => {
		if (canBeFlipped === false) return;
		setCurrentFlip((prevFlip) => !prevFlip);
	};

	const fixedClassName = CSS(['card', `card-${symbol}`, `${currentFlip ? "flipped" : ""}`], classes);
	const isNumber = !isNaN(number) || number === "A";
	const fixedSize = getFixedSize(number)
	const cardsUrl = getCardUrl(number);
	const symbolsArray = new Array(parseInt(fixedSize)).fill(symbol);

	const mappedSymbols =
		symbolsArray.map((symbol, index) => <div key={index}>{symbol}</div>)


	const cardFrontStyles = {
		backgroundImage: `url(${cardsUrl.src})`
	}

	const cardBackStyles = {
		backgroundImage: `url(${CardBackImage.src})`,
	}

	return (
		<div
			className={fixedClassName}
			number={number}
			onClick={onClickCardHandler}
		>
			<div
				className={CSS(["card-front"], classes)}
				style={cardFrontStyles}
			>
				<div className={CSS(["card-corner", "top-left"], classes)}>
					<div>{number}</div>
					<div>{symbol}</div>
				</div>
				<div className={CSS(["symbols"], classes)}>
					{isNumber && mappedSymbols}
				</div>
				<div className={CSS(["card-corner", "bottom-right"], classes)}>
					<div>{number}</div>
					<div>{symbol}</div>
				</div>
			</div>
			<div
				className={CSS(["card-back"], classes)}
				style={cardBackStyles}
			></div>
		</div>
	);
};

export default Card;
