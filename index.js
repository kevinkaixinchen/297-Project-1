//imports
const express = require('express');
const morgan = require('morgan');
const Blockchain = require('./src/blockchain');

//express object
const app = express();

//global vars
global.difficulty = 5;
global.blockchain = new Blockchain();
global.transactions = [];

//using Mordan to log requests and responses to the console
app.use(morgan("dev"));

//tell the app to listen on localhost port 8080
const port = 8080;
require("./routes")(app)
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`)
})