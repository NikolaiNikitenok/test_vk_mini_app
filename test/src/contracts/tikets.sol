// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Tikets is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _idTicet;  

    address public owner;
    uint256 public contractId;
    uint256 public totalSupply;


    constructor(string memory _name, string memory _symbol, uint256 _totalSupply, uint256 _id) ERC721(_name, _symbol) {
        owner = msg.sender;
        contractId = _id;
        totalSupply = _totalSupply;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs";
    }

    function mint() public {
        _idTicet.increment();
        uint256 idTicet = _idTicet.current();
        require(idTicet <= totalSupply, "Error!!!");
        _safeMint(msg.sender, idTicet);
    }
}