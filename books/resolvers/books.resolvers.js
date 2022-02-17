const booksRepositories = require("../repositories/books.repositories");

const resolvers = {
  Query: {
    getAllBooks: async (parent, args, context, info) => {
      return await booksRepositories.findAllBooks();
    },
  },
  Mutation: {
    enrollBook: async (parent, args, context, info) => {
      const book = await booksRepositories.createBook(args.bookInfo);
      return book;
    },
  },
};

module.exports = resolvers;
