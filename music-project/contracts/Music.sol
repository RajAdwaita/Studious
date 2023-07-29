// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract NFTMusic {
    // Define the PayerAccount struct
    struct PayerAccount {
        address wallet;
    }

    // Define the MusicAccount struct
    struct MusicAccount {
        address authority;
        string title;
        string music_url;
    }

    // Declare program's public key
    address public programId = address(0x6QFTyCrDJt2rh1CwMNcbro1qLKVPxTajwFCtQp1KzSDE);

    // Define state variables for token program and clock sysvar
    address public tokenProgram;
    address public clock;

    // Define mapping to store PayerAccount data
    mapping(address => PayerAccount) public payerWallets;

    // Define mapping to store MusicAccount data
    mapping(address => MusicAccount) public musicAccounts;

    // Define constructor to set token program and clock addresses
    constructor(address _tokenProgram, address _clock) {
        tokenProgram = _tokenProgram;
        clock = _clock;
    }

    // Accept payment function
    function acceptPayment(address receiver) external {
        PayerAccount storage payerWallet = payerWallets[msg.sender];
        payerWallet.wallet = msg.sender;

        // Transfer 100,000,000 lamports to the receiver using the Token program
        IERC20(tokenProgram).transfer(receiver, 100000000);
    }

    // Create music function
    function createMusic(string memory title, string memory music_url) external {
        MusicAccount storage music = musicAccounts[msg.sender];
        music.authority = msg.sender;
        music.title = title;
        music.music_url = music_url;
    }
}
