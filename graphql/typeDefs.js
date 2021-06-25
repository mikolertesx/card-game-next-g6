const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

	type Card {
		number: String
		symbol: String
	}

  type Query {
    books: [Book],
		table: [Card],
		hand: [Card]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }
`;

module.exports = typeDefs;