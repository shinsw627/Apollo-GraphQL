const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    signUp(user: UserInput): User
    enrollBook(bookInfo: BookInput): Book
    logIn(user: UserLoginInput): Token
  }
`;

module.exports = typeDefs;
