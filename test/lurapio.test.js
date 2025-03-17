const LurapioCoin = require('../src/lurapio');
const Block = require('../src/block');
const Transaction = require('../src/transaction');

describe('LurapioCoin', () => {
  let lurapio;

  beforeEach(() => {
    lurapio = new LurapioCoin();
  });

  it('should create a genesis block', () => {
    lurapio.createGenesisBlock();
    expect(lurapio.chain.length).toBe(1);
  });

  it('should add a transaction', () => {
    const transaction = new Transaction('Alice', 'Bob', 10);
    lurapio.addTransaction(transaction);
    expect(lurapio.pendingTransactions.length).toBe(1);
  });

  it('should mine a block', () => {
    lurapio.createGenesisBlock();
    const transaction = new Transaction('Alice', 'Bob', 10);
    lurapio.addTransaction(transaction);
    lurapio.minePendingTransactions();
    expect(lurapio.chain.length).toBe(2);
  });
});