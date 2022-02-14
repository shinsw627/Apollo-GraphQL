const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
  }
`;

module.exports = typeDefs;
