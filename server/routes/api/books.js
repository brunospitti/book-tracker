const Books = require('../../models/Books');

module.exports = (app) => {
  app.get('/api/books', (req, res, next) => {
    Books.find()
      .exec()
      .then((books) => res.json(books))
      .catch((err) => next(err));
  });

};
