//block.js
//creates a block

//import
const crypto = require('crypto');

//function SHA256 that hashses the message
SHA256 = (message) => {
    return crypto
        .createHash("sha256")
        .update(message)
        .digest("hex");
}

//Block class
class Block {
    //obtain time, transactions for the block, hash, and the previous hash for mining a block
    constructor(prevHash = "", transactions = []) {
        this.timestamp = Date.now();
        this.transactions = transactions;
        this.hash = this.getHash();
        this.prevHash = prevHash;
        this.nonce = 0;

        this.mine();
    }

    //combine all transactions into a string and hash
    getHash() {
        let txStr = "";
        for(let i = 0; i < this.transactions.length; i++) {
            txStr += JSON.stringify(this.transactions[i]);
        }
        
        //returns the hash
        return SHA256(
            this.prevHash +
                this.timestamp +
                txStr +
                this.nonce
        )
    }

    //mine the block
    mine() {
        //sets the requirement for mining with the first few bits being 0
        let checkString = Array(global.difficulty + 1).join("0");
        let tries = 0;

        //finds a hash that meets the reqirement
        while(!this.hash.startsWith(checkString)) {
            this.nonce++;

            this.hash = this.getHash();

            tries++;
        }

        console.log(`Block mined with ${tries} attemps. Hash: ${this.hash}`);

    }

    //format the block
    prettify() {
        let blockStr = `<div><b>Block</b> #${this.hash}</div>`;

        blockStr += `<div><b>Timestamp:</b> ${this.timestamp}</div>`;

        blockStr += `<div><b>Previous Hash:</b> ${this.prevHash}</div>`;


        blockStr += "<div><b>Transactions:</b></div><div>";

        for(let i = 0; i < this.transactions.length; i++) {
            blockStr += "    " + this.transactions[i].prettify();
        }

        blockStr += "</div>";

        return blockStr;
    }
}

module.exports = Block;