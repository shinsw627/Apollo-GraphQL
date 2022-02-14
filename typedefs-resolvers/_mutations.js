const { gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    deleteEquipment(id: String): Equipment
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
