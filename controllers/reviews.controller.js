const Review = require("../models/Review.model");

module.exports.reviewController = {
  addReview: (req, res) => {
    Review.create({
      text: req.body.text,
      name: req.body.name,
      book: req.body.book,
    })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
  deleteReview: (req, res) => {
    Review.findByIdAndDelete(req.params.id)
      .then(() => {
        res.json("рецензия удалена");
      })
      .catch(() => res.json("error"));
  },
  getReviewBook: (req, res) => {
    Review.find({ book: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch(() => res.json("error"));
  },
};
