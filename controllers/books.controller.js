const { json } = require("express");
const Book = require("../models/Book.model");

module.exports.bookController = {
  addBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err.message));
  },
  deleteBook: (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch(() => res.json("error"));
  },
  updateBook: (req, res) => {
    Book.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  getBookId: (req, res) => {
    Book.findById(req.params.id)
      .populate("author genre")
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  getBook: (req, res) => {
    Book.find()
      .populate("author genre")
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  getBookGenre: (req, res)=> {
    Book.find({genre: req.params.id}).then((data)=> {
        res.json(data)
    }).catch(()=> res.json('error'))
  },
};
