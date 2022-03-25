const express = require('express');
const cors = require('cors');
const app = express(); // our entire API is listening through this.

app.use(express.json()); // so we can parse incoming requests that are json payloads.

app.use(express.urlencoded({extended:true})); // to parse incoming requests that are json payloads consisting of strings and arrays.

app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config")

require("./routes/team.routes")(app); // here we call the exported routes from the routes.js file.

app.listen(8000, ()=>console.log('You are connected to port 8000'));

