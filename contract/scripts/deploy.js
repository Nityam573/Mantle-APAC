const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const GitHubStakeContract = await hre.ethers.getContractFactory("GitHubStakeContract");

  // Deploy the contract
  const gitHubStakeContract = await GitHubStakeContract.deploy();

  // Wait for the contract to be deployed and mined
  await gitHubStakeContract.deploymentTransaction().wait(1);

  console.log(
    `GitHubStakeContract deployed to ${gitHubStakeContract.target} on Mantle Sepolia Testnet`
  );
}

// Recommended pattern to handle errors in async scripts
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });