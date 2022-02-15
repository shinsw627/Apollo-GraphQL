const { ApolloServer, gql } = require("apollo-server");
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

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
