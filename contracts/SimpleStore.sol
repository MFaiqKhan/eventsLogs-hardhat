// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract SimpleStore {
    uint256 public favoriteNumber; // public variable

    // event declaration
    event storedNumber(  
        uint256 indexed oldNumber,
        uint256 indexed newNumber,
        uint256 addedNumber,
        address sender,
        bool completed
    );

    function store(uint256 newFavoriteNumber) public {
        emit storedNumber(
            favoriteNumber,
            newFavoriteNumber,
            newFavoriteNumber + favoriteNumber,
            msg.sender,
            true
        );
        favoriteNumber = newFavoriteNumber;
    }


}