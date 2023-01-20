const mongoose = require("mongoose");

const authorShema = mongoose.Schema({
  name: String,
  text: String,
});

const Author = mongoose.model("Author", authorShema);
module.exports = Author;
