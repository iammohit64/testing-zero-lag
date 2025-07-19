// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ZeroLagTask {
    struct Task {
        string fileHash;
        address submitter;
        bool verified;
    }

    uint public taskCount;
    mapping(uint => Task) public tasks;

    event TaskCreated(uint taskId, address indexed submitter);
    event TaskVerified(uint taskId);

    function submitTask(string calldata fileHash) external {
        taskCount++;
        tasks[taskCount] = Task(fileHash, msg.sender, false);
        emit TaskCreated(taskCount, msg.sender);
    }

    function verifyTask(uint taskId) external {
        tasks[taskId].verified = true;
        emit TaskVerified(taskId);
    }

    function isTaskVerified(uint taskId) external view returns (bool) {
        return tasks[taskId].verified;
    }
}