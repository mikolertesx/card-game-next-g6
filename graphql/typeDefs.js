const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

	type Card {
		card: String
		flipped: Boolean
	}

  type Query {
    books: [Book],
		deck: [Card],
		table: [Card],
		hand: [Card]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

module.exports = typeDefs;