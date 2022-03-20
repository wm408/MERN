const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: [true, " You must enter an Author Name."],
        minLength: [3, " Author must be => 3 characters in length."]
    },

// include timestamps!!!
}, {timestamps:true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;