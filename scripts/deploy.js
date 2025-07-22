const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const platformWallet = deployer.address; // Replace if you want another wallet
  const minimumStake = hre.ethers.parseEther("0.01"); // 0.01 ETH minimum

  const TaskStaking = await hre.ethers.getContractFactory("TaskStaking");
  const taskStaking = await TaskStaking.deploy(platformWallet, minimumStake);

  await taskStaking.waitForDeployment();

  console.log("TaskStaking deployed to:", await taskStaking.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});