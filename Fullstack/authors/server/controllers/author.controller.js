const Author = require('../models/author.model'); // this is how we query and manipulate 'Author' collection in our database, by accessing our author.model.js

const findAllAuthors = (req, res)=>{
    Author.find().collation({locale:'en',strength: 2}).sort({authorName:1})
        .then((allAuthors)=>{ //in the parenthesis is the result of the promise. In this case, all documents inside of the collection, since we are finding everything. Like (e) in a synthetic event, this is similar. We call it 'allAuthors' in this case.
            console.log(allAuthors);
            res.json(allAuthors); // the client will have back all of the output from the database... we are making the return (or 'res'/response in this case).
        }) // here we provide the result of the promise in the (()), if it looks good and is fulfilled. Can be named whatever we want.
        .catch((err)=>{
            console.log("allAuthors has failed!");
            res.json({message: "Something went wrong in allAuthors", error: err})
        })
}

const createNewAuthor = (req, res)=>{
    Author.create(req.body) //we need to pass some information into create here, so it will be 'req.body' which is passed through via a form, for example.
        .then((newAuthor)=>{
            console.log(newAuthor);
            res.json(newAuthor);
        })
        .catch((err)=>{
                console.log("something went wrong in newAuthor");
                res.status(400).json(err); // to handle validators properly. 400 says it exists, but you're doing something wrong vs. a 404 status which means nothing exists there.
        })
}

const findOneAuthor = (req, res)=>{
    Author.findOne({_id: req.params.id}) //technically 'id' can be anything. It just needs to match our routes.
        .then((oneAuthor)=>{
            console.log(oneAuthor);
            res.json(oneAuthor);
        })
        .catch((err)=>{
            console.log('Something went wrong in oneAuthor');
            res.json({message: 'Something went wrong in oneAuthor', error: err});
        })
}

const updateOneAuthor = (req, res)=>{
    Author.findOneAndUpdate({_id: req.params.id}, // this is used to look up the particular author, 
        req.body,  // this line is actually used to do the update. req.body is an argument, we are taking in the provided information here.
        {new: true, runValidators: true} // this line will always be the same. Note, by default the validators only run on post request. 'runValidators' here ensures that it also happens on update.
        )
        .then((updatedAuthor)=>{
            console.log(updatedAuthor)
            res.json(updatedAuthor)
        })
        .catch((err)=>{
            console.log("something went wrong in updatedAuthor");
            res.status(400).json(err); // to handle validators properly. 400 says it exists, but you're doing something wrong vs. a 404 status which means nothing exists there.
        })
}

const deleteOneAuthor = (req, res)=>{ // "Adopt" means to Delete.
    Author.deleteOne({_id: req.params.id})
        .then((deleteAuthor)=>{
            console.log(deleteAuthor);
            res.json(deleteAuthor);
        })
        .catch((err)=>{
            console.log('deleteOneAuthor failed');
            res.json({message: 'deleteOneAuthor (deletion) has failed', error: err});
        })
}

module.exports = { // these exports will be called in the routes to access authors in our collection.
    findAllAuthors,
    createNewAuthor,
    findOneAuthor,
    updateOneAuthor,
    deleteOneAuthor,
}