pragma solidity ^0.4.0;
contract TrxMessages {
    
    uint current = 0;
    mapping(uint => string) public messages;


    function postMessage(string message) public returns (uint out) {
        out = current;
        messages[out] = message;
        current++;
        return out;
    }
    
    function getMessage(uint id) public view returns (string){
        return messages[id];
    }

}