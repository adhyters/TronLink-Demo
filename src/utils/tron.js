const contracts = require('../config/contracts.json');

export const postMessage = async (message) => {
    const contractInfo = contracts["contract.sol:TrxMessages"];
    const contract = window.tronWeb.contract(contractInfo.abi, contractInfo.address);
    console.log(contract.methods);
    const result = await contract.methods['postMessage(string)']([message]).send();
    console.log(result);
};

