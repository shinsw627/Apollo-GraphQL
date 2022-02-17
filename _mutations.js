const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    signUp(user: UserInput): User
    enrollBook(bookInfo: BookInput): Book
  }
`;

module.exports = typeDefs;
