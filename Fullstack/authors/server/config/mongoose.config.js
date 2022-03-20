const mongoose = require('mongoose');

const authorsDB = 'authorsDB'; // database name set to a variable.

mongoose.connect(`mongodb://localhost/${authorsDB}`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true // these is always used, make sure it is set. Makes sure depreciated parts of Mongo don't cause problems.
})
    .then(()=>{
        console.log(`you are connected to the ${authorsDB} database`);
    })
    .catch((err)=>{
        console.log(`you had a problem connecting to the ${authorsDB} database`);
    })