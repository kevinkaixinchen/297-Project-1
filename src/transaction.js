//transactions.js 
//generates a transaction

//generates a random IPV4 ip
function generateRandomIPv4() {
    let ipv4 = "";

    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;

    //returns the generated xxx.xxx.xxx.xxx ip 
    return ipv4;
}

//generates a random amount of money
function generateRandomMoney() {
    return Math.floor(Math.random() * 1000000);
}

//Transaction class
class Transaction {
    //generates the ipv4 address and money in the constructor
    constructor(fromAddress = "", toAddress = "", amount = 0) {
        this.fromAddress =  generateRandomIPv4();
        this.toAddress = generateRandomIPv4();
        this.amount = generateRandomMoney();
    }

    //format the transaction in html
    prettify() {
        let txStr = `<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>`;

        return txStr;
    }
}

module.exports = Transaction;