# Blockchain Concepts

## What is Blockchain?

- At simplest, no more than a distributed database.
- Imagine a large worldwide comptuer where everyone can securly data and execute transactional code.
- All transactions are stored in blocks of data. Very hard to manipulate or fake, once stored on blockchain.
- Ultimately provides a trustworthy way to store data in scenarios where there is no trust.
  - Examples:
    - Monetary transactions between strangers
    - Store medical information accessible only by certain individuals
- Not a place to store large amounts of data for each transaction (i.e. Not for images, but better for validation data for images to dissuade tampering)
- Most data focuses on transactions and states of objects rather than the objects themselves.

## Bitcoins = Blockchain?

- Bitcoin, first broadly used cryptocurrency
- Cryptocurrency only exists as a digital currency, and holds no underlying value
- A Bitcoin is at its simplest a unique string of letters and numbers attached to an owner.
- Very similar to the US Dollar after gold standard was done away with; you trust the bank to keep a secure ledger of incoming and outgoing values.
- No central system with Bitcoin, with no way to revert transactions.
- Bitcoin cannot exist without blockcain

### History of Blockchain

- 1991: Cryptographic secured chain of blocks describned by Stuart Haber and Scott Stornetta
- 1998: Decentralized digital currency by Nick Szabo
- 2008: Blockchain Concept
- 2009: Satoshi Nakamoto invents Bitcoin; no one knows who Satoshi is.
- 2014: Mainstream term in financial and technical media
- 2017: Race is on to work on blockchain development by startups, IBM, and Microsoft

### Characteristics of Blockchain

- Global Singleton
  - Can be thought of as global singleton instances (?)
  - Natively object-oriented (code and data reside togehter)
  - Objects are securely separated from each other
- Unstoppable
  - Cannot be stopped and cannot have a central failure
  - No single point of attack or plug to pull
- Accessible
  - Anyone with an Internet connection can access the blockchain through a number of means.
- Verifiable
  - Everyone with access to a blockchain can verify and audit everything on a blockchain.

## How Does it Work?

- Begins with a single or group of transactions in the form of a contract
- Sent to a large P2P network of computers, referred to as nodes.
- Each node has an exisiting copy of the blockchain
- Transaction is executed and validated based on pre-shared contracts and scripts
  - Ensures that each node is uses the same set of rules and standards
- When executed, the result is added to the blockchain
- Compromising a transaction would mean compromising each and every node on the chain.

### Transactions in the Blockchain

- All transactions are atomic (everything executes or nothing executes);
  - For example, in a monetary transaction, both the function that credits an account and the function that debits an account must execute successfully.
  - If either fail, all should fail or you might destroy or create money.
  - Even blockchain is susceptible to bad code.
- Transactions run independently of each other.
  - No two transactions can interact or interfere.
- Transactions must be inspectable.
  - Every method call comes with the address of the caller.
- Blockchain objects are immortal
  - All data and code is permanent, and objects cannot be removed externally or internally, unless the object is designed to remove itself.
  - When writing code for blockchain, all design decisions need to keep permanence in mind.

## Hashing 

- Core of a blockchain resides in hashing
- Hashing: mathematical algorithm that creates a result with a given length regardless of input given.
- Result is called a hash, similar to a digital fingerprint
- Hashing is a one-way function, meaning the same result will always be returned by a function given the same input, but the input can never be regenerated based on the output.
- Example: Simple algorithm

  > ```
  > {Output = roundToTen(input x2)}
  > ```

  - Imagine an algoritm that accepts a number from 1 to 45 as `input`.
  - `Input` is then doubled, and rounds to the nearest 10

  Input | Output
  ---   | ---
  3     | 10
  4     | 10
  5     | 10
  9     | 20