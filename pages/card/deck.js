import Head from 'next/head';
import { gql } from "@apollo/client";
import client from "../../graphql/client";
import Deck from '../../components/Deck/Deck'

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
	const request = await client.query({
		query: gql`
			query {
				deck {
					card
					flipped
				}
			}
		`
	});

	return {
		props: {
			cards: request.data.deck,
		}
	}
}

export default DeckPage;