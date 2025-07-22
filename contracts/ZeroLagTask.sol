// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ZeroLagTask {
    struct Task {
        address creator;
        string title;
        string description;
        string fileHash;
        uint256 reward;
        uint256 deadline;
        bool completed;
    }

    uint public taskCount;
    mapping(uint => Task) public tasks;

    function createTask(
        string memory _title,
        string memory _description,
        string memory _fileHash,
        uint256 _reward,
        uint256 _deadline
    ) external payable {
        require(msg.value == _reward, "Reward must match sent value");

        tasks[taskCount] = Task(
            msg.sender,
            _title,
            _description,
            _fileHash,
            _reward,
            _deadline,
            false
        );
        taskCount++;
    }
}