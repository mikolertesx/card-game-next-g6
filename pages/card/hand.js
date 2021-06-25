import Head from 'next/head';
import { gql } from "@apollo/client";
import client from "../../graphql/client";
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
	const request = await client.query({
		query: gql`
			query {
				table {
					card
					flipped
				}
				hand {
					card
					flipped
				}
			}
		`
	});

	return {
		props: {
			deck: request.data.table,
			hand: request.data.hand
		}
	}
}
export default HandPage;