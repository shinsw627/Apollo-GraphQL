const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    email: String
    password: String
    name: String
    phone: String
  }

  input UserInput {
    email: String
    password: String
    name: String
    phone: String
  }
`;

module.exports = typeDefs;
