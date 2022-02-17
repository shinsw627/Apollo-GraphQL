const userTypeDefs = require("./typedefs/books.typedefs");
const userResolvers = require("./resolvers/books.resolvers");

const typeDefs = userTypeDefs;
const resolvers = userResolvers;

module.exports = {
  typeDefs,
  resolvers,
};
