const booksController = require('../../controllers/booksController');

module.exports = (app) => {
  app.get('/api/books', booksController.getBooks);
};
