import Head from 'next/head';

import Deck from '../../components/Deck/Deck'
import { getCards } from '../api/card/hand'

function HandPage(props) {
	const { deck, hand } = props;

	if (!deck && !hand) {
		return <p>Loading...</p>
	}

	return <>
		<Head>
			<title>My Hand</title>
		</Head>
		<Deck path='card/deck' title='Deck' cards={deck} />
		<Deck path='card/hand' title='Hands' cards={hand} flippable={true} />
	</>
}

export async function getServerSideProps(context) {
	const data = getCards();

	return {
		props: {
			deck: data.deck,
			hand: data.hand,
		}
	}
}

export default HandPage;