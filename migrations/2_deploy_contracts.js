const KudoStorage = artifacts.require("KudoStorage");

module.exports = function(deployer) {
  deployer.deploy(KudoStorage);
};
