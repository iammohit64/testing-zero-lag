const { expect } = require("chai");

describe("ZeroLagTask", function () {
  let zeroLag, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const ZeroLag = await ethers.getContractFactory("ZeroLagTask");
    zeroLag = await ZeroLag.deploy();
    await zeroLag.deployed();
  });

  it("should allow user to submit task", async function () {
    await zeroLag.submitTask("QmFileHash123");
    const task = await zeroLag.tasks(1);
    expect(task.fileHash).to.equal("QmFileHash123");
    expect(task.submitter).to.equal(owner.address);
    expect(task.verified).to.be.false;
  });

  it("should allow admin to verify task", async function () {
    await zeroLag.submitTask("QmFileHash456");
    await zeroLag.verifyTask(1);
    const task = await zeroLag.tasks(1);
    expect(task.verified).to.be.true;
  });
});