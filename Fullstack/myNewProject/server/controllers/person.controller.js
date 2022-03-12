const mongoose = require('mongoose');
const Person = require('../models/person.model');

const index = (request, response) => {  //We are exporting a key:val pair of index : function
    response.json({     // This is where we're setting the API's response to the requesting client
        message: "Hello World"
    });
}

const findAllPeople = (request, response) => {
    Person.find()
        .then((allPeople)=>{
            console.log(allPeople);
            response.json(allPeople);
        })
        .catch((err)=>{
            console.log('There was an error looking up all people');
            response.json({message: "something went wrong in find", error: err});
        })
}

/* The method below is new */
const createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports =  {
    index,
    findAllPeople,
    createPerson,
}