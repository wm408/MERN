const mongoose = require('mongoose');

const teamDB = 'teamDB'; // database name set to a variable.

mongoose.connect(`mongodb://localhost/${teamDB}`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true // these is always used, make sure it is set. Makes sure depreciated parts of Mongo don't cause problems.
})
    .then(()=>{
        console.log(`you are connected to the ${teamDB} database`);
    })
    .catch((err)=>{
        console.log(`you had a problem connecting to the ${teamDB} database`);
    })