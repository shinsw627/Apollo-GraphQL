const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    signUp(user: UserInput): User
  }

  input UserInput {
    email: String
    password: String
    name: String
    phone: String
  }
`;

module.exports = typeDefs;
