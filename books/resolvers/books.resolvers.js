const booksRepositories = require("../repositories/books.repositories");

const resolvers = {
  Query: {
    // 모든 책 조회
    getAllBooks: async (parent, args, context, info) => {
      return await booksRepositories.findAllBooks();
    },
  },
  Mutation: {
    // 책 추가
    enrollBook: async (parent, args, context, info) => {
      const book = await booksRepositories.createBook(args.bookInfo);
      return book;
    },
  },
};

module.exports = resolvers;
