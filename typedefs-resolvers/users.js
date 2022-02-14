const { gql } = require("apollo-server");
const usersRepository = require("../repositories/users.repositories");
const bcrypt = require("bcrypt");

const typeDefs = gql`
  type User {
    id: ID
    email: String
    password: String
    name: String
    phone: String
  }
`;
const resolvers = {
  Query: {
    getAllUsers: async (parent, args, context, info) =>
      await usersRepository.findAllUsers(),
  },
  Mutation: {
    signUp: async (parent, args, context, info) => {
      const { email, password, name, phone } = args.user;
      const isUserExist = await usersRepository.existsCheckByEmail(email);

      if (isUserExist) {
        throw new Error("해당 유저는 이미 존재합니다.");
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await usersRepository.createUser({
        email,
        password: hashedPassword,
        name,
        phone,
      });

      return user;
    },
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
