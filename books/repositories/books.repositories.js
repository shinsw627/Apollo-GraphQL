const Book = require("../../models/books.model");

async function findAllBooks() {
  return await Book.find();
}

async function createBook(bookInfo) {
  return await Book.create(bookInfo);
}

module.exports = {
  findAllBooks,
  createBook,
};
