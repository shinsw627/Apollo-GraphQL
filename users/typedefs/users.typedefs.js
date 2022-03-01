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

  type Token {
    token: String
  }

  input UserInput {
    email: String
    password: String
    name: String
    phone: String
    role: Role
  }
  
  input UserLoginInput {
    email: String
    password: String
  }

  enum Role {
    developer
    designer
    product-manager
    ceo
  }
`;

module.exports = typeDefs;
