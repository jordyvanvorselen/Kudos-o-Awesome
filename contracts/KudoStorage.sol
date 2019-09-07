pragma solidity >=0.4.21 <0.6.0;

contract KudoStorage {
  event KudosGiven(string _message);

  struct KudoTx {
    uint amount;
    address sender;
    address receiver;
  }

  uint public totalKudos;
  KudoTx[] public kudoTransactions;

  function giveKudos(uint amount, address receiver) public {
    totalKudos = totalKudos + amount;

    KudoTx memory kudoTx = KudoTx(amount, msg.sender, receiver);
    kudoTransactions.push(kudoTx);

    emit KudosGiven("Kudos were given!");
  }

  function kudoTransactionCount() public view returns(uint amount) { 
    return kudoTransactions.length;
  }
}
