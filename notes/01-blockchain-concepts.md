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
- `Input` is then doubled, and rounds to the nearest 10.

> Input | Output
> ---   | ---
> 3     | 10
> 4     | 10
> 5     | 10
> 9     | 20

- Every output length will be two digits, and the algorithm using the same input will always express the same output, but the input can never be derived from it.
- Obviously, much more advanced algorithms are used in production, and are available to the public.
- The more advanced the algorithm, the more power it uses.
- Common and popular algorithm is the SHA-256.
  - One of several checksum hashing algorithms.
  - SHA is a family of algorithms, and the number following denotes complexity.

### Common uses for Hashing Algorithms

- Storing passwords
  - Storing plain-text passwords puts accounts at risk if the database is hacked and the hackers get access to the table storing username and password pairs.
  - Using algorithms to hash the passwords will force the hacker to compare the passwords with known hash results where the input isn't well known.
  - This can be done using preexisting lists of common hash results or by generating large lists of hashes with random text strings.
  - Longer the password, the less likely a hacker can find the input that created that password's hash. Even if they could, they couldn't be 100% sure, so they'd have to test all combinations that led to that hash.
- Verifying consistency
  - Because of the consistency and fixed length of a hash result using the same input, hashing algorithms are useful for verifying large amounts of data
  - Hashing a pre-existing website, and then replacing a character in that website, will result in a different hash result. When compared, it will be obvious whether or not someone has made an alteration to the original or if data has been compromised
  - The initial data doesn't need to be stored; only the initial hash.
- Security
  - Often used in modern security where consistency must be high.
  - Communication exchanges including timestamps are one such example.

### Merkle Tree

- Hash of hashes of hashes

```
  |-04E9BB80DCFF7690ADEC9429C05DE704210345A2FEC4FE742BBBD0BB4D996CE4 (Hash of hashes of hashes (Root Hash))
  |
  |-|7A6D84E49EA9A9BB7A8761DDBA6B59F477783C3583FF4B48CC4124B865A7E9E4 (Hash of hashes "Pear" and "Apple")
  | |
  | |--BF70552EB765992C6222A8C28B69F8AE8750BBCD0EE4AFED34F0CA6DB091D1D0 ("Pear")
  | |--F223FAA96F22916294922B171A2696D868FD1F9129302EB41A45B2A2EA2EBBFD ("Apple")
  |
  |-|FA4F42DB3EBDCE907CA1C76AA5F749C1D1DE2EFDE736657DCE87D5E838A8F223 (Hash of hashes "PC" and "MAC")
  | |
  | |--21D017C40A91C15748F0B98CD826BA445D2D3FE227E310BFD58DCB6C431826A0 ("PC")
  | |--1F6368E6ECC0AA626F29AC4E81F7D034E5417D0BED2DCA558DDC9BE0ECD9D081 ("MAC")
```

- Makes it quick and easy to confirm large amounts of hashes
  1. Imagining four sets of data, each set is hashed.
  2. Then, groups of those hashes are hashed.
  3. The resulting hashes are used to create a root hash.

## The Block

- Consists of data and resulting hash.
- If the data is changed, the hash will change, and the block will be made invalid.
- Also includes the nounce, input to the hashing algorithm that will result in the first part of the resulting hash to be predefined.
  - Impossible to predict the nounce, so it can be considered a proof of work by the machine producing the hash.
- Because the hash result of a nounce prefaces the rest of the hash, and change will require the hashing algorithm to be run until the nounce that matches the prefix is found. This is called "mining the block."

### Chain of Blocks

- One block in a chain will contain
  - Data
   Hash result
  - Nounce
  - Number of order in a chain
  - Hash of the previous block in a chain
- Altering any value in one block will break all following blocks.
- Only way to fix the blockchain would be to mine all the blocks after the changed block and recalculate all the nounced hashes.

### Distributed Chain of Blocks

- Chains are distributed to multiple computers, existing in multiple locations.
- Depending on impelementation it could be millions of replications of the same chain.
- Makes it easy to spot changes, even if a chain has been re-mined.
- A remined chain in a distributed system would have different hashes from other chains in the system. Because blockchain trusts the chain with the most work put into it, the remined chain would be rejected by the distributed blockchain and removed.

### Fork

- Understanding forks helps to understand why forgery is difficult in blockchain.
- Imagine three users: Kent, his mom Sharon, and a car Dealer.
  - Kent wants to purchase a car from a Dealer who accepts Bitcoin.
  - Sharon gives Kent 100 Bitcoins, who in turn pays the Dealer in exchange for a Tesla.
  - Kent then sees a better Mercedes for sale by another Bitcoin-friendly vendor for the same price, and wants to purchase it instead.
  - Kent is now broke, but attempts to add a block to the blockchain using the information from the previously owned Bitcoins used to buy the Tesla once more to purchase the Mercedes.
  - A fork in the blockchain is created because of this.
- In order to resolve the transaction, Kent would processing power equivalent to the rest of the blockchain in order to validate his new chain. Highly unlikely, but it's been attempted before.
- If the new chain is downloaded, the fork will be audited against other chains and removed.
- The same computer power to achieve this could be used to mine blocks legally instead, a good incentive to remain honest.

## Securing Your Data

- Data in the blockchain is generally available to all who have access to the chain. Makes security a priority
- While this is fine in some applications, most of the time it's important to control who has access to the data.
- Two way to handle this: obfuscation and encryption.
- Obfuscation: making data relevant only to those who understand its meaning.
  - Using Bitcoin as an example, where each address is a string of letter and numbers.
    - No one knows who the address is conencted to, but everyone knows every transaction going between different account addresses.
    - Anonymity here is a personal choice.
    - Unless a connection to the account address is shared, it's hard for anyone to know that you're the account owner.
  - Data could also contain IDs and status codes. Without knowing what different IDs are connected to, the data is useless.
  - Obfuscation alone will always run the risk of someone making the connection due to a breach in the system controlling the key and connecting the data. Encryption helps with this.
- Encryption: applies two way algorithm to a message or transaction payload that can only be decoded with a secure password or passphrase.
  - This makes the data available to everyone, but only those with the decryption keys can make sense of it.
  - Many encryption algorithms available, as with hashing. One of the most popular today is AES.
  - Encrypting the data by, for example passing it through an AES 128 encryption with a generated key will maintain the block structure while adding additional security.
  - The block with encrypted data can still be verified by the blockchain, but the data will only be useful to those with the key.

## Public vs. Private

- Blockchains can be either public or private
- Public blockchains
  - Are accessible to anyone with an internet connection
  - Are funded by paying for storage, transaction, and execution costs to those entities that have joined the chain.
    - Can be expensive. Bitcoin for example has gone from a few cents to a few thousands of dollars in a matter of years. Paying 1% on transactions becomes costly. Once different currencies in use stabalize, this becomes less of an issue.
  - Have no given point of attack for a hacker, since it has no centralized authority.
  - Is heavily reliant on the community for support.
    - Raises many concerns that require solutions and research
  - is highly democratic.
    - Communities typically has to decide how to handle forks, and the size of a stake in the blockchain determines how many votes a stakeholder has in decisions regarding that blockchain.
- Private blockchains
  - Are considered by many to not be "real blockchains" as they are not truly distributed and democratic in nature.
  - Are closer to traditional database
  - Are cost controlled as the infrastucture is owned by the organization.
  - Are access-controlled, so only known entitites can access data.
  - Can act as controlled storage, as many countries have laws regarding the handling of sensitive data.
  - Has fewer, but more specific, points of attack; meaning it may not be as secure as a public distributed blockchain.

## Major Offerings

- Bitcoin
- Ethereum from Consensus and Microsoft is gaining traction from developers for non-financial applications.
- IBM blockchain on Bluemix for creating our own blockchain

## Uses for Blockchain

- Digital currencies like Bitcoin
- Internet of things can use blockchain to make trustworthy transactions
- Product lifecycle can store all informatin on workflow or product in a blockchain.
- Certification bodies can use blockchain as a tamper-free way to certify products or organizatins
- Encrypted information can be transferred between hospitals and doctors with a record of who has accessed it and for what purpose.
- Virtual products can be marketed, sold, and controlled using blockchain.
