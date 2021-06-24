import Head from 'next/head';

import Deck from '../../components/Deck/Deck'
import { getDeck } from '../api/card/deck'

function DeckPage(props) {
	const { cards } = props;

	if (!cards) {
		return <p>Loading...</p>
	}

	return <>
	<Head>
		<title>All Cards</title>
	</Head>
		<Deck path='card/deck' title='All Cards' cards={cards} />
	</>
}

export async function getServerSideProps(context) {
	const deck = getDeck()

	return {
		props: {
			cards: getDeck(),
		}
	}
}

export default DeckPage;