const KudoStorage = artifacts.require("KudoStorage");

contract("KudoStorage", accounts => {
  context("if kudos are given", () => {
    it("total amount of kudos are incremented", async () => {
      const simpleStorageInstance = await KudoStorage.deployed();

      await simpleStorageInstance.giveKudos(50, { from: accounts[0] });

      const totalKudos = await simpleStorageInstance.totalKudos.call();

      assert.equal(totalKudos, 50);
    });
  })
});
