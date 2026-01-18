# Smart Contract Event Indexer

A high-quality Web3 reference project designed to demonstrate how smart contract
events can be indexed, decoded, and analyzed across EVM-compatible blockchains
such as Ethereum, Base, Polygon, and Arbitrum.

This repository focuses on **on-chain logs, ERC20/ERC721 event patterns, contract
activity tracking, and structured blockchain data pipelines** using clean,
readable, and beginner-friendly reference code.

---

## Supported Networks
- Ethereum
- Base
- Polygon
- Arbitrum

---

## Project Goals
- Demonstrate how smart contract logs are captured
- Show how blockchain events can be decoded
- Index ERC20 and ERC721 transfer activity
- Structure event data for analytics use
- Teach on-chain event data flow using clean patterns

---

## Features
- Block listener
- Event indexer
- ERC20 transfer decoder
- ERC721 transfer decoder
- Event storage model
- Network configuration handler
- Clean, modular reference code
- Beginner-friendly documentation

---

## Repository Structure
All files are located in the root directory for simplicity:

- `network.config.js` → Blockchain and RPC configuration  
- `event.indexer.js` → Core event indexing logic  
- `erc20.decoder.js` → ERC20 event decoding  
- `erc721.decoder.js` → ERC721 event decoding  
- `block.listener.js` → New block detection  
- `event.store.js` → Event storage model  
- `rpc.client.js` → RPC connection handler  
- `address.utils.js` → Contract validation helpers  
- `index.js` → Main reference entry file  
- `event.simulator.js` → Event simulation logic  

---

## How It Works
1. Connects to a blockchain RPC endpoint  
2. Listens for new blocks  
3. Extracts transaction logs  
4. Decodes contract events  
5. Indexes structured event data  
6. Outputs analytics-ready records  

---

## Configuration
Open `network.config.js` and update:
- `NETWORK` to select your blockchain
- `CONTRACT_ADDRESS` to track a smart contract

---

## Use Cases
- Blockchain analytics dashboards  
- Smart contract monitoring  
- NFT marketplace indexing  
- Token transfer tracking  
- Web3 developer onboarding  

---

## Educational Disclaimer
This project is intended for learning and reference purposes only.
It does not provide financial, trading, or investment advice.

---

## License
MIT License
