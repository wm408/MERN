const express = require('express');
const app = express();
const port = 8000;

/* Next two lines enable cross origin requests between server and client to avoid browser issues. */
const cors = require('cors');
app.use(cors());

// enables JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays */

require('./config/mongoose.config');    /* This is new */

require('./routes/person.routes')(app);   // We're importing the routes export.

app.listen(port, () => console.log(`Listening on port: ${port}`) );
