const hre = require("hardhat"); // hardhat runtime environment

async function main() {
  await hre.run("compile");

  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStore");
  const simpleStorage = await SimpleStorage.deploy();
  await simpleStorage.deployed();
  console.log(`SimpleStorage deployed at ${simpleStorage.address}`); // put it on kovan Testnnet explorer, "kovan.etherscan.io" , to check for contract deployed

  const transactionResponse = await simpleStorage.store(1); // calling store function from our smart contract with the favorite number being 1
  const transactionReceipt = await transactionResponse.wait(); // waiting for the transaction to be mined

  // console.log(transactionReceipt); // logging the object , which contains many things including our events we put in our contract
  console.log(transactionReceipt.events[0].args); // logging the event and arguments inside event obj we put in our smart contract
  console.log(transactionReceipt.events[0].args.oldNumber.toString()); // logging the old number  , old number will be 0
  console.log(transactionReceipt.events[0].args.newNumber.toString()); // logging the new number  , new number will be 1
  console.log(transactionReceipt.events[0].args.sender); // logging the sender
  console.log(transactionReceipt.events[0].args.completed); // logging the transaction hash
}


main().catch((error) => {
  console.log(error);
})

