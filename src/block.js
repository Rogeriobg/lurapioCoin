const crypto = require('crypto-js');

class Block {
  constructor(index, timestamp, transactions, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const blockString = JSON.stringify(this);
    return crypto.SHA256(blockString).toString();
  }
}

module.exports = Block;