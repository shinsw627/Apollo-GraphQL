const { gql } = require("apollo-server-core");

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
    page: Int
    publisher: String
    state: BookState
    color: BookColor
  }

  enum BookState {
    NEW
    OLD
  }

  enum BookColor {
    BLUE
    BLACK
    RED
    GREEN
    WHITE
    PURPLE
  }

  input BookInput {
    title: String
    author: String
    page: Int
    publisher: String
    state: BookState
    color: BookColor
  }
`;

module.exports = typeDefs;
