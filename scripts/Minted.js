
const { ethers } = require("hardhat"); 
require("dotenv").config();

async function main() {
  
  const privateKey = process.env.PRIVATE_KEY;

  
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/Bh22s-iYGmFwy-9Dq3New4jIpUES9xZt";

  
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  
  const signer = new ethers.Wallet(privateKey, provider);

  
  const contractAddress = "0xc46715266Fa334aB473B67B06eF70bf157d73a4F";

  
  const OneNFT = await ethers.getContractFactory("ONEPIECE", signer);
  const contract = await OneNFT.attach(contractAddress);

  
  await contract.mint(5);

  
  console.log("successfully minted '5' tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 