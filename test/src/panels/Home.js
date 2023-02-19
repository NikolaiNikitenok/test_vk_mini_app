import React from 'react';
import { useState, useEffect} from 'react';
import PropTypes, { string } from 'prop-types';

import { 
	Panel, 
	PanelHeader, 
	PanelHeaderBack, 
	Header, 
	Button, 
	Group, 
	Cell, 
	Div, 
	Avatar, 
	Tabs, 
	TabsItem, 
	List, 
	Footer, 
	PopoutWrapper,
	Textarea,
	Checkbox,
	Link,
	Radio,
	FormLayout, 
	FormItem, 
	Input, 
} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';
import Web3 from 'web3';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";


const timestamp = require('unix-timestamp');

const containerStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
	};

const Home = ({ id, go}) => {

	const [popout, setPopout] = useState(null);

	const clearPopout = () => setPopout(null);

	const [fetching, setFetching] = React.useState(false);

	// Сосотояния пользователей
	const [userInWhiteList, setUserInWhiteList] = useState(false)


	// Состояния страниц

	const [homePage, setHomePage] = useState(true)
	const [buyPage, setBuyPage] = useState(false)
	const [createPage, setCreatePage] = useState(false)
	const [settingsPage, setSettingsPage] = useState(false)
	const [inventoryPage, setInventoryPage] = useState(false)

	const [showGroup, setShowGroup] = useState(false)
	

	// const initUsers = getRandomUsers(10);
	// console.log(initUsers)

	// Состояние мероприятия
	const [nameEvent, setNameEvent] = useState('')
	const [formatEvent, setFormatEvent] = useState('')
	const [descriptionEvent, setDescriptionEvent] = useState('')
	const [quantityEvent, setQuantityEvent] = useState(0)

	const [countEventik, setCountEventik] = useState(0)
	// const allEvents = 6
	let fragmentEvent = null

	// Функции сосотояния страниц
	const setHomeBuy = () => {
		setHomePage(!homePage);
		setBuyPage(!buyPage);
	}
	const setHomeCreate = () => {
		setHomePage(!homePage);
		setCreatePage(!createPage);
	}
	const setHomeSettings = () => {
		setHomePage(!homePage);
		setSettingsPage(!settingsPage);
	}
	const setHomeInventory = () => {
		setHomePage(!homePage);
		setInventoryPage(!inventoryPage);
	}
	const setSettingsInventory = () => {
		setSettingsPage(!settingsPage);
		setInventoryPage(!inventoryPage);
	}

	// Для коннектов
	const [isConnected, setIsConnected] = useState(false);
	const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [ethAcc, setEthAcc] = useState('');
  const [ethAdd, setEthAdd] = useState('');
  // const [popout, setPopout] = useState(null);
  // const clearPopout = () => setPopout(null);

	const [addRemBlock, setAddRemBlock] = useState([])


	const abiCollection = [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_symbol",
					"type": "string"
				},
				{
					"internalType": "uint256",
					"name": "_totalSupply",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "_id",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "_whiteList",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "_admin",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "_date",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "approved",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "contractId",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "countTic",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "date",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "getApproved",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "lenWhite",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "mint",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ownerOf",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "remainingTickets",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address[]",
					"name": "_whitelist",
					"type": "address[]"
				}
			],
			"name": "setWhitelist",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "whitelistLook",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "whteList",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]

	// Для интерфейса

	const [name, setName] = React.useState('');
	// const [email, setEmail] = React.useState('');
  // const [purpose, setPurpose] = React.useState('');
  // const [showPatronymic, setShowPatronymic] = React.useState(true);
	const [symbol, setSymbol] = React.useState('');
	const [quantity, setQuantity] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [format, setFormat] = React.useState(false);
	const [whiteList, setWhiteList] = React.useState([]);
	const [date, setDate] = React.useState(1);

	const [isCreated, setIsCreated] = useState(false);


	// Создание блока с разметкой для сущ мероприятий

	const [plusBlock, setPlusBlock] = useState([])
	const [plusMyBlock, setPlusMyBlock] = useState([])
	const [plusMyBought, setPlusMyBought] = useState([])
	

  const onChange = (e) => {
    const { name, value } = e.currentTarget;

    const setStateAction = {
			name: setName,
      email: setEmail,
      purpose: setPurpose,
			quantity: setQuantity,
			symbol: setSymbol,
			description: setDescription,
			date: setDate,
			whiteList: setWhiteList,
    }[name];

    setStateAction && setStateAction(value);
  };

	const setCancelableScreenSpinner = () => {
		setPopout(<ScreenSpinner state="cancelable" onClick={clearPopout} />);
	};

	// Коннекты кошелька и контракта

	const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };
  
  const onConnect = async() => {
    try {
      const currentProvider = detectCurrentProvider();
			const ABI = 
			[
				{
				 "inputs": [
					{
					 "internalType": "string",
					 "name": "_name",
					 "type": "string"
					},
					{
					 "internalType": "string",
					 "name": "_symbol",
					 "type": "string"
					},
					{
					 "internalType": "string",
					 "name": "_discription",
					 "type": "string"
					},
					{
					 "internalType": "uint256",
					 "name": "_supply",
					 "type": "uint256"
					},
					{
					 "internalType": "bool",
					 "name": "_format",
					 "type": "bool"
					},
					{
					 "internalType": "address[]",
					 "name": "_whiteList",
					 "type": "address[]"
					},
					{
					 "internalType": "uint256",
					 "name": "_date",
					 "type": "uint256"
					}
				 ],
				 "name": "createEvent",
				 "outputs": [
					{
					 "internalType": "address",
					 "name": "",
					 "type": "address"
					}
				 ],
				 "stateMutability": "nonpayable",
				 "type": "function"
				},
				{
				 "inputs": [],
				 "stateMutability": "nonpayable",
				 "type": "constructor"
				},
				{
				 "inputs": [],
				 "name": "addressStor",
				 "outputs": [
					{
					 "internalType": "address",
					 "name": "",
					 "type": "address"
					}
				 ],
				 "stateMutability": "view",
				 "type": "function"
				},
				{
				 "inputs": [
					{
					 "internalType": "uint256",
					 "name": "",
					 "type": "uint256"
					}
				 ],
				 "name": "collections",
				 "outputs": [
					{
					 "internalType": "address",
					 "name": "",
					 "type": "address"
					}
				 ],
				 "stateMutability": "view",
				 "type": "function"
				},
				{
				 "inputs": [],
				 "name": "countEvent",
				 "outputs": [
					{
					 "internalType": "uint256",
					 "name": "",
					 "type": "uint256"
					}
				 ],
				 "stateMutability": "view",
				 "type": "function"
				},
				{
				 "inputs": [],
				 "name": "eventLength",
				 "outputs": [
					{
					 "internalType": "uint256",
					 "name": "",
					 "type": "uint256"
					}
				 ],
				 "stateMutability": "view",
				 "type": "function"
				},
				{
				 "inputs": [
					{
					 "internalType": "uint256",
					 "name": "",
					 "type": "uint256"
					}
				 ],
				 "name": "incidents",
				 "outputs": [
					{
					 "internalType": "uint256",
					 "name": "id",
					 "type": "uint256"
					},
					{
					 "internalType": "address",
					 "name": "from",
					 "type": "address"
					},
					{
					 "internalType": "address",
					 "name": "fabric",
					 "type": "address"
					},
					{
					 "internalType": "uint256",
					 "name": "supply",
					 "type": "uint256"
					},
					{
					 "internalType": "string",
					 "name": "name",
					 "type": "string"
					},
					{
					 "internalType": "string",
					 "name": "symbol",
					 "type": "string"
					},
					{
					 "internalType": "string",
					 "name": "discription",
					 "type": "string"
					},
					{
					 "internalType": "bool",
					 "name": "format",
					 "type": "bool"
					},
					{
					 "internalType": "address",
					 "name": "ticketCollection",
					 "type": "address"
					},
					{
					 "internalType": "uint256",
					 "name": "date",
					 "type": "uint256"
					},
					{
					 "internalType": "uint256",
					 "name": "len",
					 "type": "uint256"
					}
				 ],
				 "stateMutability": "view",
				 "type": "function"
				},
				{
				 "inputs": [
					{
					 "internalType": "address",
					 "name": "",
					 "type": "address"
					},
					{
					 "internalType": "uint256",
					 "name": "",
					 "type": "uint256"
					}
				 ],
				 "name": "listEvent",
				 "outputs": [
					{
					 "internalType": "uint256",
					 "name": "",
					 "type": "uint256"
					}
				 ],
				 "stateMutability": "view",
				 "type": "function"
				}
			 ]

			 
      if(currentProvider) {
        
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        console.log(account);
        // setDoneScreenSpinner();
        setEthBalance(ethBalance);
        setEthAcc(account)
        setIsConnected(true);
      
				const Address = "0x848b865795171B0b93De2264c5fceD109f6C4Eae";
				setEthAdd(Address)
				window.web3 = await new Web3(window.ethereum);
				window.contract = await new window.web3.eth.Contract(ABI, Address);
				setWalletIsConnected(true);


				// counter
				const countEv = await window.contract.methods.countEvent().call({ from: ethAcc })
				setCountEventik(countEv)
			
      }
    } catch(err) {
      console.log(err);
    }
  }


	const goodList = async (string) => {

		// string = string.trim();
		setWhiteList(string.split(' '));
		

		// let len = string.length

		// let sup = ''

		// for (let i=0; i < len; i++) {
		// 	if (i != ' ' && i != ',') {
		// 		sup += i
		// 	} else {
		// 		whiteList.push(sup)
		// 	}
		// 	console.log(whiteList)
		// }

	}

	// Создание мероприятия
	const createEventik = async () => {
		// setWhiteList(whiteList.trim());
		// setWhiteList(whiteList.split(','));


		await window.contract.methods.createEvent(name, symbol, description, quantity, format, whiteList, date).send({ from: ethAcc });

		// setCancelableScreenSpinner();
		
		setIsCreated(true);

	}

	const showEvent = async () => {
		// Цикл по проходу всех мероприятий
		// let copy = Object.assign([], plusBlock)
		let copy = []

		for (let i=1; i<=countEventik; i++) {
			
			const newer = await window.contract.methods.incidents(i).call({ from: ethAcc });
			console.log(newer)
			var myDate = new Date( newer['date'] *1000);
			console.log(myDate.getDate() + '/' + myDate.getMonth() + '/' + myDate.getFullYear())


			window.contractDochka = await new window.web3.eth.Contract(abiCollection, newer['ticketCollection']);
			const rem = await window.contractDochka.methods.whteList(ethAcc).call({ from: ethAcc });
				{rem && (
					setUserInWhiteList(true)
				)}
			console.log(userInWhiteList)
			const lenRem = newer['len']
			console.log(lenRem)
			// {!lenRem && (

			// )}

			// setNameEvent(newer['name'])
			// const parsedEvent = JSON.parse(newer);
			// {newer['format'] && (
			// 	setFormatEvent('Онлайн')
			// )}
			// {!newer['format'] && (
			// 	setFormatEvent('Оффлайн')
			// )}
			// setQuantityEvent(newer['supply'])
			// setDescriptionEvent(newer['discription'])
			
			// Отрисовка
			
			const miniBlock = (
					<Div key={i} style={{
						border: "white 2px solid",
						borderRadius: "20px",
						margin: "20px"
						}}>
						<Div>
							<h2>
								{newer['name']}
							</h2>
						</Div>
						<Div>
							<span>Кол-во билетов: </span>
							{newer['supply']}
						</Div>
						<Div>
							<span>Начало: </span>
							{myDate.getDate() + '/' + myDate.getMonth() + '/' + myDate.getFullYear()}
						</Div>
						{/* <Div>
							<span>WhiteList </span>
							{newer['whiteList']}
						</Div> */}
						<Div>
							<span>Формат мероприятия: </span>
							{newer['format'] && (
								<span>Онлайн</span>
							)}
							{!newer['format'] && (
								<span>Оффлайн</span>
							)}
						</Div>
						<Div>
							<span>Описание: </span>
							{newer['discription']}	
							
						</Div>
							{rem && (
								<Button style={{backgroundColor: "blue"}} stretched size="l" mode="secondary" onClick={() => buyNft(newer['ticketCollection'])}>Купить</Button>
							)}
							{!rem && lenRem > 0 && (
								<Button stretched size="l" mode="secondary">Купить</Button>
							)}
							{!rem && lenRem == 0 && (
								<Button style={{backgroundColor: "purple"}} stretched size="l" mode="secondary" onClick={() => buyNft(newer['ticketCollection'])}>Купить</Button>
							)}
					</Div>
			)

			copy.push(miniBlock)
			


			// showBlocks(nameEvent, formatEvent, quantityEvent, descriptionEvent)
			
		}

		
		setPlusBlock(copy)

		setShowGroup(true)
	}


	const showMyEvent = async () => {
		let cop = []

		for (let i=1; i<=countEventik; i++) {

			const newer = await window.contract.methods.incidents(i).call({ from: ethAcc });

			if (ethAcc == newer['from']) {
			


				window.contractDochka = await new window.web3.eth.Contract(abiCollection, newer['ticketCollection']);
				const rem = await window.contractDochka.methods.remainingTickets().call({ from: ethAcc });

				// console.log(rem)
				


				// console.log(newer)
				// setNameEvent(newer['name'])
				// const parsedEvent = JSON.parse(newer);
				// {newer['format'] && (
				// 	setFormatEvent('Онлайн')
				// )}
				// {!newer['format'] && (
				// 	setFormatEvent('Оффлайн')
				// )}
				// setQuantityEvent(newer['supply'])
				// setDescriptionEvent(newer['discription'])
				
				// Отрисовка
				
				const miniBlock = (
						<Div key={i} style={{
							border: "white 2px solid",
							borderRadius: "20px",
							margin: "20px"
							}}>
							<Div>
								<h2>
									{newer['name']}
								</h2>
							</Div>
							<Div>
								<span>Кол-во билетов: </span>
								{newer['supply']}
							</Div>
							{/* <Div>
								<span>WhiteList </span>
								{newer['whiteList']}
							</Div> */}
							<Div>
								<span>Формат мероприятия: </span>
								{newer['format'] && (
									<span>Онлайн</span>
								)}
								{!newer['format'] && (
									<span>Оффлайн</span>
								)}
							</Div>
							<Div>
								<span>Описание: </span>
								{newer['discription']}	
								
							</Div>
							<Div>
								<span>Оставшиеся билеты: </span>
								{rem}	
								
							</Div>
							<Div>

								{/* {() => remainingTick(newer['ticketCollection'])} */}
								
							</Div>
							
							{/* <Button stretched size="l" mode="secondary" onClick={() => remainingTick(newer['ticketCollection'])}>Показать Оставшиеся</Button> */}
						</Div>
				)

				cop.push(miniBlock)
			

			}
			// showBlocks(nameEvent, formatEvent, quantityEvent, descriptionEvent)
			
		}

		setPlusMyBlock(cop)
	}




	const showBoughtEvent = async () => {
		let proofUrl = 'https://vk.com/app51559018#';

		let cop = [];
		console.log(cop)

		// for (let g=1; g <=countEventik; i++) {
		// 	const newer = await window.contract.methods.incidents(i).call({ from: ethAcc });
		// }

		for (let i=0; i<=countEventik-1; i++) {
			console.log(i)
			const contr = await window.contract.methods.collections(i).call({ from: ethAcc });

			const proofUrlTrue = proofUrl + ethAcc + '/' + contr
			

			window.contractDochka = await new window.web3.eth.Contract(abiCollection, contr);
			const prov = await window.contractDochka.methods.balanceOf(ethAcc).call({ from: ethAcc });
			const rem = await window.contractDochka.methods.remainingTickets().call({ from: ethAcc });
			console.log(prov)
			if (prov != 0) {

				
				// cop.push(newer)
				console.log(proofUrlTrue)

				
				const nameBought = await window.contractDochka.methods.name().call({ from: ethAcc });
				
				const myDate = await window.contractDochka.methods.date().call({ from: ethAcc });
				var myDates = new Date( myDate *1000)
				
				// Отрисовка
			
			

				const miniBlockBought = (
				<Div key={i} style={{
					border: "white 2px solid",
					borderRadius: "20px",
					margin: "20px",
					display: "flex"
					}}>
					<Div >
						<Div>
							<h2>
								{nameBought}
							</h2>
						</Div>
						<Div>
							<span>Кол-во билетов: </span>
							{prov}
						</Div>
						{/* <Div>
							<span>WhiteList </span>
							{newer['whiteList']}
						</Div> */}
						<Div>
							<span>Адрес контракта: </span>
							{contr}
						</Div>
						<Div>
							<span>Дата: </span>
							{myDates.getDate() + '/' + myDates.getMonth() + '/' + myDates.getFullYear()}
							
						</Div>
						<Div>
							<span>Оставшиеся билеты: </span>
							{rem}	
							
						</Div>
						<Div>
							{/* <span> Ссылка на проверку владения: </span> */}

						</Div>
						{/* <Button stretched size="l" mode="secondary" onClick={() => remainingTick(newer['ticketCollection'])}>Показать Оставшиеся</Button> */}
					</Div>
						<QRCode
						style={{width: '170px'}}
						value={proofUrlTrue}
					>
					</QRCode>
					</Div>
				)
				cop.push(miniBlockBought)

			}

		}
			// showBlocks(nameEvent, formatEvent, quantityEvent, descriptionEvent)
		setPlusMyBought(cop)	

		
	
	}

	// const showBlocks = async (n, f, q, d) => { 
	// 	const miniBlock = (
	// 		<Group header={<Header mode="secondary">Список билетов</Header>}>
	// 			<Div>
	// 				<Group header={<Header mode="secondary">{n}</Header>}>
	// 					<Div>
	// 						<span>Кол-во билетов: </span>
	// 						{q}
	// 					</Div>
	// 					<Div>
	// 						<span>Формат мероприятия: </span>
	// 						{f}
	// 					</Div>
	// 					<Div>
	// 						<span>Описание: </span>
	// 						{d}
	// 					</Div>
	// 				</Group>
	// 			</Div>
	// 		</Group>
	// 	)
	// 	setPlusBlock(miniBlock)
	
	// }

	const buyNft = async (id) => {
		
		console.log(id)

		window.contractDoch = await new window.web3.eth.Contract(abiCollection, id);
		await window.contractDoch.methods.mint().send({ from: ethAcc });
	}

	const remainingTick = async (id) => {
		let cop = [];
		// console.log(id);

		window.contractDoch = await new window.web3.eth.Contract(abiCollection, id);
		const rem = await window.contractDoch.methods.remainingTickets().call({ from: ethAcc });


		const remBlock  = (
			<Div>{rem}</Div>
		)
		console.log(rem);

		cop.push(remBlock);

		setAddRemBlock(cop);
	}

	const onDisconnect = () => {
    setIsConnected(false);
  }
  
  
  

	return(	
		
		<>
			{homePage &&  (
				<Panel>
					<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
						
					</PanelHeader>
					<Tabs>
						<TabsItem selected onClick={go}>
							Главная
						</TabsItem>
						{/* <TabsItem>Купить билеты</TabsItem> */}
						<TabsItem onClick={setHomeInventory}>Мои Мероприятия</TabsItem>
						<TabsItem onClick={setHomeSettings}>Настройки</TabsItem>
					</Tabs>
					<br/>
					<Group header={<Header mode="secondary">Мероприятия</Header> }>
						<Div>
							<Button stretched size="l" mode="secondary" onClick={setHomeBuy}>
								Купить билеты
							</Button>
							<br/>
							<Button stretched size="l" mode="secondary" onClick={setHomeCreate}>
								Создать мероприятие
							</Button>
							{/* <Button stretched size="l" mode="secondary" onClick={test}>
								pobebritb
							</Button> */}
						</Div>
					</Group>
				</Panel>
		
			)}

			{buyPage && (
				<Panel id={id}>
				<PanelHeader left={<PanelHeaderBack onClick={setHomeBuy}/>}> 
					Покупка билетов
				</PanelHeader>
				{!isConnected && (
						<Div>
							<br/>
							<Button className="app-button__login" stretched size="l" mode="secondary" onClick={onConnect}>
							Подключить MetaMask
							</Button>
						</Div>
						
					)}

				{!showGroup && isConnected && (
					<Div>					
						<Button stretched size="l" mode="secondary" onClick={showEvent}>
							Показать мероприятия
						</Button>
					</Div>
				)}

				{showGroup && (<>
					
					<Group header={<Header mode="secondary">Список билетов</Header>}>
						<Div>
								{plusBlock}	
							{/* <Group header={<Header mode="secondary">{nameEvent}</Header>}>
								<Div>
									<span>Кол-во билетов: </span>
									{quantityEvent}
								</Div>
								<Div>
									<span>Формат мероприятия: </span>
									{formatEvent}
								</Div>
								<Div>
									<span>Описание: </span>
									{descriptionEvent}
								</Div>
							</Group> */}
						</Div>
					</Group>
					</>
				)}
			</Panel>
			)}
			

			{/* Создание Мероприятия */}
			{createPage && !homePage && (
				<Panel>
					<PanelHeader left={<PanelHeaderBack onClick={setHomeCreate}/>}> 
						Создание мероприятия
					</PanelHeader>
					{!isConnected && !isCreated && (
						<Div>
							<br/>
							<Button className="app-button__login" stretched size="l" mode="secondary" onClick={onConnect}>
							Подключить MetaMask
							</Button>
						</Div>
						
					)}
		
					{isConnected && walletIsConnected && !isCreated && (
						<Group>
							{/* <Button onClick={show}/> */}

							<FormLayout>

								{/* Название */}
								<FormItem
								top="Название мероприятия (20 символов)"
								status={name ? 'valid' : 'error'}
								bottom={
									name ? '' : 'Обязательное поле!'
								}
								>
								<Input type="name" name="name" value={name} onChange={(event) => setName(event.target.value)} maxLength={20}/>
								</FormItem>
		
								{/* Символ */}
								<FormItem
								top="Символ мероприятия (до 5 символов)"
								status={symbol ? 'valid' : 'error'}
								bottom={
									symbol ? '' : 'Обязательное поле!'
								}
								>
								<Input type="symbol" name="symbol" value={symbol} onChange={(event) => setSymbol(event.target.value)} maxLength="5"/>
								</FormItem>
		
								{/* Кол-во */}	
								<FormItem
								top="Количество"
								status={quantity ? 'valid' : 'error'}
								bottom={
									quantity ? '' : 'Обязательное поле!'
								}
								>
								<Input type="number" name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
								</FormItem>


								{/* Дата */}	
								<FormItem
								top="Через сколько дней мероприятие? (Укажите число - кол-во дней.)"
								status={date >= 1 ? 'valid' : 'error'}
								bottom={
									date ? '' : 'Обязательное поле!'
								}
								>
								<Input type="number" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
								</FormItem>


								{/* Формат */}
								<FormItem top="Формат мероприятия">
									<Radio 
										name="format" 
										value="false" 
										defaultChecked
										onChange={(event) => setFormat(event.target.value)}
									>
										Offline
									</Radio>
		
									<Radio 
										name="format" 
										value="true"
										onChange={(event) => setFormat(event.target.value)}
									>
										Online
									</Radio>
								</FormItem>



								{/* White List Users */}
								<FormItem 
									top="WhiteList (Укажите адреса пользователей, которые могут приобретать билеты)"
									bottom="Перечислите адреса через ПРОБЕЛ"
								>
									<Textarea type='name' name='whiteList' onChange={(event) => goodList(event.target.value)} maxLength={800}/>
								</FormItem>
								

								{/* О Мероприятии */}
								<FormItem 
									top="Коротко о мероприятии"
									bottom="Макс. 200 символов"
								>
									<Textarea type='name' name='description' value={description} onChange={(event) => setDescription(event.target.value)} maxLength={200}/>
								</FormItem>
								{/* <Checkbox checked disabled>
									Согласен с <Link onClick={go} data-to="privacy">политикой конфиденциальности</Link>
								</Checkbox> */}

								{/* Зарегистрировать */}
								<FormItem>
									<Button 
										size="l" 
										stretched
										onClick={createEventik}
										>
		
										Зарегистрировать мероприятие
		
									</Button>
								</FormItem>
							</FormLayout>
						</Group>
						)}
		
						{isCreated && (
							<Group
								header={
									<Header>
										Уведомление:
									</Header>
								}
							>
								<Div>
									Вы создали мероприятие, поздравляем!
								</Div>
							</Group>
						)}
				</Panel>
			)}



			{/* Настройки */}	

			{settingsPage && (
				<Panel>
					<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
					
					</PanelHeader>
					<Tabs>
						<TabsItem onClick={setHomeSettings}>Главная</TabsItem>
						{/* <TabsItem>Купить билеты</TabsItem> */}
						<TabsItem onClick={setSettingsInventory}>Мои Мероприятия</TabsItem>
						<TabsItem selected>Настройки</TabsItem>
					</Tabs>
					<br/>
					<Group className="app-wrapper" header={<Header mode="secondary">Подключение MetaMask</Header>}>
						{!isConnected && (
							<Div>
								<br/>
								<Button className="app-button__login" stretched size="l" mode="secondary" onClick={onConnect}>
								Подключить MetaMask
								</Button>
							</Div>
						)}
					
						{isConnected && (
							<Div className="app-wrapper">
								<div className="app-details">
									<h2> Вы подключились к MetaMask.</h2>
									<Group header={<Header mode="secondary">Информация</Header>}>
										<Div>
											<div className="app-balance">
												<span>Баланс Кошелька: </span>
												{ethBalance / (10**18)}
											</div>
											<br/>
											<div>
												<span>Адрес Кошелька: </span>
												{ethAcc}
											</div>
											<br/>
											{walletIsConnected && (
												<div>
													<span>Адрес Контракта: </span>
													{ethAdd}
												</div>
											)}
										</Div>
									</Group>
									
								</div>
		
								<br/>
		
								<div>
									<Button className="app-buttons__logout" stretched size="l" mode="secondary" onClick={onDisconnect}>
									Отключиться
									</Button>
								</div>
							</Div>
						)}
					</Group>
				</Panel>
			)}



			{/* Инвентарь */}

			{inventoryPage && (
				
					<Panel>
						<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
						
						</PanelHeader>
						<Tabs>
							<TabsItem onClick={setHomeInventory}>Главная</TabsItem>
							{/* <TabsItem>Купить билеты</TabsItem> */}
							<TabsItem selected>Мои мероприятия</TabsItem>
							<TabsItem onClick={setSettingsInventory}>Настройки</TabsItem>
						</Tabs>
						<br/>
						{!isConnected && (
							<Group header={<Header mode="secondary">Подключите MetaMask</Header>}>
								<br/>
								<Button className="app-button__login" stretched size="l" mode="secondary" onClick={onConnect}>
								Подключить MetaMask
								</Button>
							</Group>
						)}
						{isConnected && (<>
							<Group header={<Header mode="secondary">Мои билеты</Header>}>
								<Div>
									<Button stretched size="l" mode="secondary" onClick={showBoughtEvent}>Показать купленные</Button>
									{/* Если пусто, то добавить кнопку для перехода в магазин билетов, иначе открыть панель с билетами. */}
									{plusMyBought}
									</Div>
							</Group>
							<Group header={<Header mode="secondary">Созданные Мероприятия</Header>}>
								<Button stretched size="l" mode="secondary" onClick={showMyEvent}>Показать</Button>
								{plusMyBlock}
								{/* {console.log(plusMyBlock)} */}
							</Group>
						</>
						)}
					</Panel>

			)}


			

			</>
	);
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_100: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
