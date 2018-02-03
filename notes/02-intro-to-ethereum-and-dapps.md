# Introduction to Ethereum and DAPPS

## What is Ethereum?

- One of the largest blockchains based on a proposal by Buterin in 2013. Publicly available 2015
- Open source, making it useful for private blockchain
- Application development ecosystem that includes a programming language that runs on blockchain, which allows for development of DAPPS, short for distributed applications.
- Hosts a dedicated cryptocurrency called Ether, similar to Bitcoins.
- Fast transaction times, where block time is often measured in seconds instead of minutes as with Bitcoin
- Method for funding transactions based on complexity, bandwidth use, and storage needs.
  - Different than Bitcoin where transactions compete equally with each other regardless of factors
- Proof of stake is used to validate work instead of proof of work
  - Downside of proof of work is that it requires large complex computational problems to be solved to verify the block. As it's a waste of resources, Ethereum uses proof of direct economic stake.

### Why Ethereum?

- Community support
- Evolved and learned from Bitcoin development
- Targets application development with a dedicated contract language.
- Easy to set up private blockchains and test implementations
- Broad commercial adoption

### Ether

- Currency used with Ethereum
- Traded under ETH
  - Highly volatile
- Base for paying for transactions in Ethereum

### Ether Denominations

- 1 ETH is equal to:
  - 1 quintillion WEI
  - 1 million Szabo
  - 1000 Finney
  - 1/1000 Kether

### Ethereum Classic

- Traded under ETC
- Should be aware of this to avoid confusion
- Exists because of the DAO Hack
- A DAO is a decentralized autonomous organization funded on the blockchain
- The DAO in question for Slock.it had a crowdfunding contract on the Ethereum blockchain and raised a lot of money.
- Unfortunately, a weakness in the contract's code allowed a hacker to create a child DAO into which he drained funds.
- The community came together and voted on a Hard Fork in the blockchain, reverting funds to their status at the time of the hack.
- This event brings of an interesting question. Is it okay to make changes to the blockchain even if the code did exactly what it was told to do?
  - Those who disagree with this notion have been deemed "Crypto-anarchists," and believe that the victims of a hack or vulnerability that was the result of non-malicious, but insecure code are subject to the consequences of their own actions.

## The Enterprise Ethereum Alliance

- Goal is to build and support the Ethereum blockchain
- Mission statement
  - Learn from and build upon the only smart contract supporting blockchain currently running in real-world production to define enterprise-grade software capable of handling the most complex, highly-demanding applications at the speed of business.

## Distributed Applications (DAPPs)

- Traditional Applications Architecture
  - Server
    - Provides storage, data logic, and user credentials
  -Client
    - Runs an interface with a set communication channel
- Distributed Applications
  - Blockchain
    - Shared data and data logic are shared and available on the distributed blockchain
    - Doesn't matter if one of the servers goes down as they all host the same information.
    - As soon as a contract is uploaded to the chain, it will spread and execute regardless of where it's run from.
  - Client
    - Includes the interface, but is also responsible for storing its own credentials and some application data
    - Makes the solution resistant to system failure, and can operate without centralized systems.

### Smart Contracts in Ethereum

- When deploying code to Ethereum, it will be using smart contracts developed in Solidity.
- Smart contracts live in the blockchain and execute code as instructed by a shared logic
- Contracts make up data logic layer that can:
  - Read other contracts
  - Send Ether
  - Execute other contracts
  - Make Decisions
- Contracts will exist and run as long as the network exists, and will only stop if they run out of transactional funding, or if they are preprogrammed to self destruct.

## Payment Model - Gas

- Every distributed model needs a system defined to defend from attacks
- General principle should be making it harder to attack than to defend
- Hashing algorithms, as an example, are extremely easy to use, but very expensive to crack.
- When protecting blockchains, the "payment model" for transactions should be fair when the blockchain is used appropriately, but extremely expensive when used maliciously.
- Gas: internal pricing of running transactions or contracts in Ethereum
  - Not tied to the value of ether to determine "cost" of running the contract
- The more computation, memory, bandwidth, and storage a transaction or contract needs to run, the more Gas is required to run it.
- If a user doesn't have the Ether to cover all Gas requirements to complete running the code, all processing aborts and all intermediate state changes roll back to the pretransaction snapshot.
  - Despite the transaction not completing, any Gas used to execute code up to the point where said transaction stopped will be deducted from the user's account.

## Transactions

- Data package that stores a message to be sent from an externally owned account to an account on the blockchain
  - Contains:
    - Recipient
    - Signature of sender
    - Value: amount of WEI to transfer from sender to recipient
    - Gasprice: fee senders are willing to pay. More => Higher rank
    - Startgas: Max of computational steps transaction executed is allowed to take
      - Ensures no infinite loops will start
    - Optional datafield (Message)

## Effect of Startgas and Gas Price

Amount              |Startgas               |Gasprice
--------------------|-----------------------|-------------------------
Too low             |Not sent to miners     |No work done by miners
Low                 |Out-of-gas Error       |Mined Slower
Medium              |Ideal                  |Ideal
High                |Delay in getting Mined | Mined Faster
Too High            |Exceed block gas limit |Not sent to miners if sender is out of funds