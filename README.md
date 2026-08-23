# SpeedRun Ethereum — Tokenization

An accepted [SpeedRun Ethereum Tokenization](https://speedrunethereum.com/challenge/tokenization) challenge submission built with Scaffold-ETH 2.

The project deploys an ERC-721 collectible contract to Ethereum Sepolia and provides a public Next.js interface for minting, viewing, and transferring NFTs.

## Live deployment

- **App:** https://mabolla-tokenization.vercel.app
- **Verified contract:** https://sepolia.etherscan.io/address/0x2665ce73d4465dc53e0a15f56b79007354bc4619
- **Network:** Ethereum Sepolia
- **Challenge status:** Accepted

> This is a testnet learning project. The NFTs and Sepolia ETH have no monetary value.

## What was completed

- Implemented an ERC-721 collectible using OpenZeppelin contracts
- Deployed the contract to Ethereum Sepolia
- Verified the source code on Etherscan, Blockscout, and Routescan
- Published the Scaffold-ETH 2 frontend on Vercel
- Minted an NFT from the live application
- Transferred the NFT between two wallets and returned it to the original owner
- Added GitHub Actions checks for the challenge workspace
- Submitted and passed SpeedRun Ethereum's automated validation

## Contract

The contract supports:

- ERC-721 ownership and transfers
- Enumerable token discovery
- Per-token URI storage
- Public NFT minting
- Owner-controlled contract administration

Contract source:

`challenge-tokenization/packages/hardhat/contracts/YourCollectible.sol`

Frontend source:

`challenge-tokenization/packages/nextjs`

## Run locally

From the repository root:

```bash
cd challenge-tokenization
yarn install
yarn start
```

The frontend expects a supported wallet connected to the configured network. For the deployed version, use Ethereum Sepolia.
