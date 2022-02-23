//chain.js
//prints the chain

function chain(app) {
    //gets the blockchain
    app.get("/chain", (req, res) => {
        //prettify the blockchain
        let chainStr = global.blockchain.prettify();

        res
            .status(200)
            .send(chainStr);
    });
}

module.exports = chain;