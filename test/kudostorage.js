const KudoStorage = artifacts.require("KudoStorage");

contract("KudoStorage", accounts => {
  let kudoStorageInstance;

  before(async () => {
    kudoStorage = await KudoStorage.deployed()
  })

  context("if kudos are given", () => {
    before(async () => {
      await kudoStorage.giveKudos(50, accounts[1], "because it's awesome", { from: accounts[0] });
    })

    it("total amount of kudos are incremented", async () => {
      const totalKudos = await kudoStorage.totalKudos.call();
      assert.equal(totalKudos, 50);
    });

    it("total amount of kudo transactions are incremented", async () => { 
      let transactionCount = await kudoStorage.kudoTransactionCount.call();
      assert.equal(transactionCount, 1);

      await kudoStorage.giveKudos(50, accounts[1], { from: accounts[0] });

      transactionCount = await kudoStorage.kudoTransactionCount.call();
      assert.equal(transactionCount, 2);
    });

    it("a kudotransaction is saved", async () => {
      const kudoTx = await kudoStorage.kudoTransactions.call(0);
      assert.equal(kudoTx.sender, accounts[0]);
      assert.equal(kudoTx.receiver, accounts[1]);
      assert.equal(kudoTx.amount, 50);
      assert.equal(kudoTx.message, "because it's awesome");
    });
  })
});
