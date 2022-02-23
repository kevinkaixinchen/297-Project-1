//blockchain.js
//create blockchain from blocks

//imports
const Block = require("./block");

//Blockchain class
class Blockchain {
    //creates the genesis block in the constructor
    constructor() {
        this.chain = [new Block(Array(65).join("0"))]
    }

    //gets the last block
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    //gets blockchain length
    getChainLength() {
        return this.chain.length;
    }

    //adds a block to the blockchain
    addBlock() {
        //creates new block
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);
        //add the block to the blockchain
        this.chain.push(Object.freeze(newBlock));
    }

    //check if the block is valid
    isChainValid(blockchain = this) {
        //for each of the blocks, varify the prev and cur block's hashes
        for(let i = 1; i < blockchain.chain.length; i++) {
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i-1];

            //check if the hashes match the calculated hash
            if(
                currentBlock.hash !== currentBlock.getHash() ||
                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false;
            }
            
            let checkString = Array(global.difficulty + 1).join("0");

            //check if the block meets the requirement of zeros
            if(!currentBlock.hash.startsWith(checkString)) {
                return false;
            }
        }
        return true;
    }

    //update the blockchain if valid 
    replaceChain(newChain) {
        if(newChain.length <= this.chain.length) return;

        if(!this.isChainValid(newChain)) return;

        this.chain = newChain;
    }

    //format the chain
    prettify() {
        let chainStr = "";

        for(let i = 0; i < this.chain.length; i++) {
            chainStr += this.chain[i].prettify();
            chainStr += "<br><hr>";
        }

        return chainStr;
    }
}

module.exports = Blockchain;