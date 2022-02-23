//validate.js
//vaildates the blockchain

function validate(app) {
    //calls the validate function
    app.get("/validate", (req, res) => {
        let isValid = global.blockchain.isChainValid();

        let resStr = "";

        //validity output
        if(isValid) {
            resStr = "The blockchain is valid!";
        } else {
            resStr = "The blockchain is invalid!"
        }

        res
            .status(200)
            .send(resStr);
    });
}

module.exports = validate;