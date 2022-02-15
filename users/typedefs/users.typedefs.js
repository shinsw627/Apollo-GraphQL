const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    email: String
    password: String
    name: String
    phone: String
    role: Role
  }

  input UserInput {
    email: String
    password: String
    name: String
    phone: String
  }

  enum Role {
    developer
    designer
    planner
    ceo
  }
`;

module.exports = typeDefs;
