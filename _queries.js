const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getAllUsers: [User]
    getAllBooks: [Book]
  }
`;

module.exports = typeDefs;
