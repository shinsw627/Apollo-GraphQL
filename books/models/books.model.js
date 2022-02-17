const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    default: "unknown",
  },
  state: {
    type: String,
    default: "NEW",
  },
  color: {
    type: String,
    default: "BLUE",
  },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
