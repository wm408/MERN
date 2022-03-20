const authorController = require('../controllers/author.controller');
const author = require('../models/author.model');

module.exports = (app) =>{ // these exports will be called by the server.js

    app.get('/api/authors', authorController.findAllAuthors);

    app.post('/api/authors', authorController.createNewAuthor); // while the path '/api/authors' is the same as the one above, we have a different http request here.

    app.get('/api/authors/:id', authorController.findOneAuthor); // this 'id' value must match the corresponding parameters in the controller file for the particular function; at the end of req.params.id <--- this 'id'. Can be anything on both sides but MUST match.

    app.put('/api/authors/:id', authorController.updateOneAuthor);

    app.delete('/api/authors/:id', authorController.deleteOneAuthor);
}