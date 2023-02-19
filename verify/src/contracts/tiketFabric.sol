// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Counters.sol";
import "./tikets.sol";


contract TiketStore {

    using Counters for Counters.Counter;
    Counters.Counter private _idEvent;     

    address private owner;
    address public addressStor;

    struct affair {
        uint256 id;
        address from;
        address fabric;
        uint256 supply;
        string name;
        string symbol;
        string discription;
        bool format; // false - offline,  true - online
        address ticketCollection;
    }

    mapping(uint256 => affair) public incidents;

    constructor () {
        owner = msg.sender;
        addressStor = address(this);
    }

    function createEvent(string memory _name, string memory _symbol, string memory _discription, uint256 _supply, bool _format) public returns(address) {
        _idEvent.increment();
        uint256 idEvent = _idEvent.current();
        Tikets newTickets = new Tikets(_name, _symbol, _supply, idEvent);
        incidents[idEvent] = affair(idEvent, msg.sender, addressStor, _supply, _name, _symbol, _discription, _format, address(newTickets));
        return address(newTickets);
    }

    function addressTiket(uint256 _id) public view returns(address){
        return incidents[_id].ticketCollection;
    }

}