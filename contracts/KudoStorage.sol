pragma solidity >=0.4.21 <0.6.0;

contract KudoStorage {
    event KudosGiven(string _message);

    uint public totalKudos;

    function giveKudos(uint amount) public {
        totalKudos = totalKudos + amount;

        emit KudosGiven("Kudos were given!");
    }
}
