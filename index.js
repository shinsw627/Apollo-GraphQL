const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const queries = require("./_queries");
const mutations = require("./_mutations");
const users = require("./users/users");

dotenv.config({
  path: ".env",
});

const typeDefs = [queries, mutations, users.typeDefs];
const resolvers = [users.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
