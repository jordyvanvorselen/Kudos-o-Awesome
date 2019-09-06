pragma solidity >=0.4.21 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/KudoStorage.sol";

contract TestKudoStorage {
    function testCanGiveKudos() public {
      KudoStorage simpleStorage = KudoStorage(DeployedAddresses.KudoStorage());

      simpleStorage.giveKudos(50);

      uint expected = 50;
      
      Assert.equal(simpleStorage.totalKudos(), expected, "It should increase the total kudos with 50.");
    }
}
