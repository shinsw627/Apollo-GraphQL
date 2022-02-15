const userTypeDefs = require("./typedefs/users.typedefs");
const userResolvers = require("./resolvers/users.resolvers");

const typeDefs = userTypeDefs;

const resolvers = userResolvers;

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
