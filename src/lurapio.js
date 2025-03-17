const crypto = require('crypto-js');
const Block = require('./block');
const Transaction = require('./transaction');

class LurapioCoin {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
  }

  createGenesisBlock() {
    const genesisBlock = new Block(0, Date.now(), [], '0');
    this.chain.push(genesisBlock);
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  minePendingTransactions() {
    const newBlock = new Block(this.chain.length, Date.now(), this.pendingTransactions, this.chain[this.chain.length - 1].hash);
    this.chain.push(newBlock);
    this.pendingTransactions = [];
  }
}

module.exports = LurapioCoin;