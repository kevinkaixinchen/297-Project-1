//listtransactions.js
//lists all the current block transactions

//imports
const transactions = require("../src/transaction");

function listtransactions(app) {
    //get the transactions
    app.get("/listtransactions", (req, res) => {
        let txStr = "";
        
        //prettify all the transactions and put it all in one string
        for(let i = 0; i < global.transactions.length; i++) {
            txStr += global.transactions[i].prettify();
        }

        res
            .status(200)
            .send(txStr);
    });
}

module.exports = listtransactions;