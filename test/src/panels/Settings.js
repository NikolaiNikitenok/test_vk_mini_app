import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import {ethers} from './dist/ethers.min.js'; 
import { Button, Group, Panel, PanelHeader, PanelHeaderBack, Div, Header, TabsItem, Tabs, Snackbar, Avatar, CellButton, ScreenSpinner} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk, Icon16Done} from '@vkontakte/icons';
// import MetaMask from 'metamask-connect';
import Web3 from 'web3';
// import WalletConnectProvider from '@walletconnect/web3-provider';

import './Persik.css';

const Settings = ({id, go}) => {
	// const [userAccount, setUserAccount] = useState(null);

	// const onConnect = () => {
	// 	let provider;
	// 	if (window.ethereum) {
	// 		//если есть метамаск
	// 		window.ethereum.request({method: "eth_requestAccounts"}).then((account) => {
	// 			setUserAccount(account[0]);
	// 			getBalance(account[0]);
	// 		})
	// 	} else if (window.web3) {
	// 		provider = window.web3.currentProvider;
	// 	} else {
	// 		alert("Установите МетаМаск!")
	// 	}
	// };

	// const getBalance = (account) => {
	// 	window.ethereum.request({method: "eth_getBalance", params: [account, "Latest"],}).then((balance) => {
	// 		console.log(balance)	
	// 	})
	// };
    
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [ethAcc, setEthAcc] = useState('');
  const [ethAdd, setEthAdd] = useState('');
  const [popout, setPopout] = useState(null);
  const clearPopout = () => setPopout(null);

  const setDoneScreenSpinner = () => {
    setPopout(<ScreenSpinner state="loading" />);
  
    setTimeout(() => {
      setPopout(<ScreenSpinner state="done" aria-label="Успешно" />);
  
      setTimeout(clearPopout, 1000);
    }, 2000);
  };
  
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
        
      }
    } catch(err) {
      console.log(err);
    }
  }

  const connectContract = async () => {
    const ABI = [
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
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "addressTiket",
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
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]


    const Address = "0x14A0cc3D250631032c0A1E91036E817adDec51C1";
    setEthAdd(Address)
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( ABI, Address); 
    // document.getElementById("contractArea").innerHTML = "Connected to smart-contract";
  }



  const onDisconnect = () => {
    setIsConnected(false);
  }
  

	return(
		// <Panel>
		// 	<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
		// 	</PanelHeader>
		// 	<Tabs>
		// 		<TabsItem onClick={go} data-to="home">Главная</TabsItem>
		// 		{/* <TabsItem>Купить билеты</TabsItem> */}
		// 		<TabsItem onClick={go} data-to="inventory">Мои Мероприятия</TabsItem>
		// 		<TabsItem selected onClick={go} data-to="settings">Настройки</TabsItem>
		// 	</Tabs>
		// 	<Group header={<Header mode="secondary">Подключить MetaMask</Header>}>
		// 		<Div>	
		// 			{userAccount ? (
    //                     <>
    //                         <span>Кошелек подключен!!!</span>
    //                     </>
		// 				) : (
		// 					<><h2>Подключите свой кошелек к приложению!</h2>
		// 					<Button stretched size="l" mode="secondary" onClick={onConnect} >Подключить кошелек MetaMask</Button></>
		// 					)}
		// 			{/* <><h2>Подключите свой кошелек к приложению!</h2>
		// 			<Button>Подключить кошелек MetaMask</Button></> */}
		// 		</Div>
		// 	</Group>
		// </Panel>

    <Panel className="app">
      <PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
      </PanelHeader>
      <Tabs>
        <TabsItem onClick={go} data-to="home">Главная</TabsItem>
        {/* <TabsItem>Купить билеты</TabsItem> */}
        <TabsItem onClick={go} data-to="inventory">Мои Мероприятия</TabsItem>
        <TabsItem selected onClick={go} data-to="settings">Настройки</TabsItem>
      </Tabs>
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
                  {/* <div>
                    <span>Адрес Контракта: </span>
                    {ethAdd}
                  </div> */}
                </Div>
              </Group>

              <br/>
              
              <Button stretched size="l" mode="secondary" onClick={connectContract}>
                  Подключиться к контракту
              </Button>
              
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
	)

	// const [isConnected, setIsConnected] = useState(false);
  // const [ethBalance, setEthBalance] = useState("");
  
  // const detectCurrentProvider = () => {
  //   let provider;
  //   if (window.ethereum) {
  //     provider = window.ethereum;
  //   } else if (window.web3) {
  //     provider = window.web3.currentProvider;
  //   } else {
  //     console.log("Non-ethereum browser detected. You should install Metamask");
  //   }
  //   return provider;
  // };
  
  // const onConnect = async() => {
  //   try {
  //     const currentProvider = detectCurrentProvider();
  //     if(currentProvider) {
  //       await currentProvider.request({method: 'eth_requestAccounts'});
  //       const web3 = new Web3(currentProvider);
  //       const userAccount  =await web3.eth.getAccounts();
  //       const account = userAccount[0];
  //       let ethBalance = await web3.eth.getBalance(account);
  //       setEthBalance(ethBalance);
  //       setIsConnected(true);
  //     }
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }
  
  // const onDisconnect = () => {
  //   setIsConnected(false);
  // }
  
  
  
  // return (
  //   <div className="app">
  //     <div className="app-header">
  //       <h1>React dApp authentication with React, We3.js and Metamask</h1>
  //     </div>
  //     <div className="app-wrapper">
  //       {!isConnected && (
  //         <div>
  //           <button className="app-button__login" onClick={onConnect}>
  //           Login
  //           </button>
  //         </div>
  //       )}
  //     </div>
  //     {isConnected && (
  //       <div className="app-wrapper">
  //         <div className="app-details">
  //           <h2> You are connected to metamask.</h2>
  //           <div className="app-balance">
  //             <span>Balance: </span>
  //             {ethBalance}
  //           </div>
  //         </div>
  //         <div>
  //           <button className="app-buttons__logout" onClick={onDisconnect}>
  //           Disconnect
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

Settings.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
// Inventory.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// };

export default Settings;
