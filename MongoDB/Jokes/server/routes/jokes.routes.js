const mongoose = require('mongoose');

const UserController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', UserController.findAllJokes); // tested ok
    app.get('/api/jokes/:_id', UserController.findJokeId); // tested ok
    app.post('/api/jokes/', UserController.makeJoke); // tested ok
    app.put('/api/jokes/:_id', UserController.changeJoke); // tested ok
    app.delete('/api/jokes/:_id', UserController.destroyJoke); // tested ok
}