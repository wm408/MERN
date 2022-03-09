const mongoose = require('mongoose');
const Joke = require('../models/jokes.model');

/* Jokes */
const findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err)=>{
            res.json({ message: 'Something went wrong', error: err})
        });
}

const findJokeId = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
    .then((joke) => res.json(joke))
    .catch((err) => console.log(err));
};

const makeJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => console.log(err));
};

const changeJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
    new: true,
    runValidators: true,
    })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log(err));
};

const destroyJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = {
    findAllJokes,
    findJokeId,
    makeJoke,
    changeJoke,
    destroyJoke,
};