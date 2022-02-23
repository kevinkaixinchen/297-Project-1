//mine.js
//mines a new block and adds it to the chain

function mine(app) {
    //gets the mined block
    app.get("/mine", (req, res) => {
        //add the new block 
        global.blockchain.addBlock();
        
        //clera transactions
        global.transactions = [];

        //prettify the block
        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;

        res.status(200).send(msg);
    })
}

module.exports = mine;