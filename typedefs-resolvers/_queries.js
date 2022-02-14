const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    equipments: [Equipment]

    getAllUsers: [User]
  }
`;

module.exports = typeDefs;
