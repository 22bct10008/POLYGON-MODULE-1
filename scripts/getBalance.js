const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/ONEPIECE.sol/ONEPIECE.json");

const tokenAddress = "0xA1ACF063B1A92B4deDa215Fd67c92DE4f72bA64B"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xe21206633D405be8628d0361E95d5dac439BcCd1"; 
async function main() {
    
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    
    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
 
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
