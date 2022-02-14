const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    signUp(user: UserSignUpInput): User
  }

  input UserSignUpInput {
    email: String
    password: String
    name: String
    phone: String
  }
`;

module.exports = typeDefs;
