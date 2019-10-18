const mongoose = require('mongoose');
const Books = mongoose.model('Books');

exports.getBooks = async (req, res, next) => {
  Books.find()
    .exec()
    .then((books) => res.json(books))
    .catch((err) => next(err));
}