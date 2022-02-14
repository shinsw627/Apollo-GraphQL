const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const queries = require("./typedefs-resolvers/_queries");
const mutations = require("./typedefs-resolvers/_mutations");
const equipments = require("./typedefs-resolvers/equipments");
const users = require("./typedefs-resolvers/users");

dotenv.config({
  path: ".env",
});

const typeDefs = [queries, mutations, equipments.typeDefs, users.typeDefs];

const resolvers = [equipments.resolvers, users.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
