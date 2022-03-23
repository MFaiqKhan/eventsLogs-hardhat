# EVM has functionality called the logging

It emits events , EVM right the things which happened on blockchain in a data structure called logs
Logs can be accessed by the blockchain nodes that we are running
we can get the logs by running "eth_getlogs" command in our blockchain node
Inside the logs there is a functionality called "Events"
Events allows us to print things in our logs which are so much gas efficient.

why it's cheaper ?  because logs and events actually live outside the smart contracts in a data structure
so smart contracts can't access them , thats why its cheaper 
but we can still print the events without saving as a storage in our smart contracts

Events are tied to smartContracts or the addresses that emitted this events

Listening to these events are very helpful especially in frontend when it waits for the task to complete then the 
event is emitted and frontend processes it and then it waits for the next event.
Events are very helpful in offchain based work

### Indexed Keyword, Indexed Parameters are much more easy to search by topics as compare to non Indexed parameters
Non Indexed are abi encoded so its hard to search for them.

Non Indexed parameters cost less gas.

https://stackoverflow.com/questions/70019983/what-is-difference-between-internal-and-private-in-solidity


Deploying this contract to testnet

command: npx hardhat run scripts/deploy.js --network kovan

Then go to kovan.etherscan.io and search for the contract address and refresh the page and click on the "store" method function deployed from that contract.
click on the logs and check the "Transaction Receipt Event Logs"

For all the variables to appear in the logs , will need for hardhat to verify the contract

Will need Etherscan API Key and follow the Readme.md to verify

then we will be able to see all the variables and decoded non indexed arguments in the transaction receipt logs 