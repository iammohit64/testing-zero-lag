const { ethers } = require("hardhat");

async function main() {
  const ZeroLagTask = await ethers.getContractFactory("ZeroLagTask");

  const zeroLag = await ZeroLagTask.deploy();
  await zeroLag.waitForDeployment();

  console.log("ZeroLagTask deployed to:", await zeroLag.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});