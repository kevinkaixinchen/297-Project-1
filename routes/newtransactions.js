//newtransactions.js
//route for the newtransactions action
//creates a new transaction

//imports
const Transaction = require("../src/transaction");

function newtransaction(app) {
    //create new transaction
    app.get("/newtransaction", (req, res) => {
        let tx = new Transaction();

        global.transactions.push(tx);

        res
            .status(300)
            .send(tx.prettify());
    })
}

module.exports = newtransaction;