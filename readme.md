# ONEPIECE NFT Contract

An Ethereum smart contract that implements an ERC-721A token for the ONE PIECE anime series.

## Description

This Ethereum smart contract is designed to manage non-fungible tokens (NFTs) for the ONE PIECE anime series. It extends the ERC-721A standard to enable the creation, ownership, and management of NFTs. The contract allows the owner to mint new NFTs, restricts the maximum quantity of tokens that can be minted, and provides functions to check token balances and retrieve metadata.

## Getting Started

### Installing

To interact with this smart contract, you'll need access to an Ethereum development environment, such as [Remix](https://remix.ethereum.org/) .You will also need the `ERC721A.sol` contract file, which can be obtained from the `"erc721a/contracts/"` directory.

### Executing the Contract

1. Deploy the `ONEPIECE` contract on an Ethereum network using your preferred development environment.
2. After deployment, the owner of the contract can use the `mint` function to create new NFTs, adhering to the `maxQuantity` limit.
3. Users can check their token balances using the `getBalance` function.
4. The `promptDescription` function allows you to retrieve the prompt associated with the NFTs.

Example commands to interact with the contract:

```solidity
// Mint 3 NFTs (assuming contract instance is named "ONEPIECE")
ONEPIECE.mint(3);

// Get the balance of tokens for a specific address
uint256 tokenBalance = ONEPIECE.getBalance(address);

// Retrieve the prompt description
string memory prompt = ONEPIECE.promptDescription();
```

## Authors

- E Mohith
- 22BCT10008@cuchd.in

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
