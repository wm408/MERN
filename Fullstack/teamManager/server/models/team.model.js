const mongoose = require('mongoose');

const TeamManagerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        //our validations are defined down here.
        //most take two values: the Criteria and Message
        required: [true, "You must have a player name"],
        minlength: [2, "Must have at least 2 characters in the player name"],
    },
    prefPosition: {
        type: String,
    },
    playerStatus: {
        type: String,
        // required: [true, "You are missing the player status."],
    }
//_id is created every time we create a new document.

// include timestamps!!!
}, {timestamps:true})


//model includes collection name in singular form, e.g. 'Team' (best practice), and second part is the schema....
const Team = mongoose.model('Team', TeamManagerSchema);

module.exports = Team; // this export will be called in the controller.


