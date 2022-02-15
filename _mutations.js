const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    signUp(user: UserInput): User
  }
`;

module.exports = typeDefs;
