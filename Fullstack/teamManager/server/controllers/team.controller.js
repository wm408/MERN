// this is how we query and manipulate 'Team' collection in our database, by accessing our *.model.js
const Team = require('../models/team.model');

// we are exporting an object of key/value pairs.
// the key being how we are referring to our calls,
// and the call itself (arrow function), being the value!
// we can easily access these in the Team.routes.js

const findAllTeams = (req, res)=>{
    Team.find()
        .then((allTeams)=>{ //in the parenthesis is the result of the promise. In this case, all documents inside of the collection, since we are finding everything. Like (e) in a synthetic event, this is similar. We call it 'allTeams' in this case.
            console.log(allTeams);
            res.json(allTeams); // the client will have back all of the output from the database... we are making the return (or 'res'/response in this case).
        }) // here we provide the result of the promise in the (()), if it looks good and is fulfilled. Can be named whatever we want.
        .catch((err)=>{
            console.log("findAllTeams has failed!");
            res.json({message: "Something went wrong in findAll", error: err})
        })
}

const createNewTeam = (req, res)=>{
    Team.create(req.body) //we need to pass some information into create here, so it will be 'req.body' which is passed through via a form, for example.
        .then((newTeam)=>{
            console.log(newTeam);
            res.json(newTeam);
        })
        .catch((err)=>{
                console.log("something went wrong in createNewTeam");
                res.status(400).json(err); // to handle validators properly. 400 says it exists, but you're doing something wrong.m vs. a 404 status which means nothing exists there.
        })
}

const findOneTeam = (req, res)=>{
    Team.findOne({_id: req.params.id}) //technically 'id' can be anything. It just needs to match our routes.
        .then((oneTeam)=>{
            console.log(oneTeam);
            res.json(oneTeam);
        })
        .catch((err)=>{
            console.log('Find One Team Failed');
            res.json({message: 'Something went wrong in find one Team', error: err});
        })
}

const updateTeam = (req, res)=>{
    Team.findByIdAndUpdate({_id: req.params.id}, // this is used to look up the particular Player, 
        req.body,  // this line is actually used to do the update. req.body is an argument, we are taking in the provided information here.
        {new: true, runValidators: true} // this line will always be the same. Note, by default the validators only run on post request. 'runValidators' here ensures that it also happens on update.
        )
        .then((updatedTeam)=>{
            console.log(updatedTeam)
            res.json(updatedTeam)
        })
        .catch((err)=>{
            console.log("something went wrong in updateTeam");
            res.status(400).json(err); // to handle validators properly. 400 says it exists, but you're doing something wrong.m vs. a 404 status which means nothing exists there.
        })
}

const deleteOneTeam = (req, res)=>{
    Team.deleteOne({_id: req.params.id})
        .then((deletedTeam)=>{
            console.log(deletedTeam);
            res.json(deletedTeam);
        })
        .catch((err)=>{
            console.log('Delete one Team failed');
            res.json({message: 'Delete one Team failed', error: err});
        })
}

module.exports = { // these exports will be called in the routes to access all Teams in our collection.
    findAllTeams,
    createNewTeam,
    findOneTeam,
    updateTeam,
    deleteOneTeam,
}