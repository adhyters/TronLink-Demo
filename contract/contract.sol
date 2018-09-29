pragma solidity ^0.4.0;
contract TrxMessages {
    
    int current = 0;
    mapping(int => string) public messages;


    function postMessage(string message) public returns (int out) {
        out = current;
        messages[out] = message;
        current++;
        return out;
    }
    
    function getMessage(int id) public view returns (string){
        return messages[id];
    }

}