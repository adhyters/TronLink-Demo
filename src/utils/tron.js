const contracts = require('../config/contracts.json');

export const postMessage = async (message) => 
{
    const trxMessages = contracts["TrxMessages.sol:TrxMessages"];
    const contract = tronWeb.contract(trxMessages.abi, trxMessages.address);
    console.log(await contract.methods.getMessage(0).call());
    const result = await contract.methods.postMessage(message).send();
    console.log(result);
};

