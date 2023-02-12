import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import {ethers} from 'ethers'
import { Button, Group, Panel, PanelHeader, PanelHeaderBack, Div, Header, TabsItem, Tabs, Snackbar, Avatar, CellButton} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk, Icon16Done} from '@vkontakte/icons';
// import MetaMask from 'metamask-connect';
import Web3 from 'web3';
// import WalletConnectProvider from '@walletconnect/web3-provider';

import './Persik.css';

const Settings = ({id, go}) => {
	const [userAccount, setUserAccount] = useState(null);

	const onConnect = () => {
		let provider;
		if (window.ethereum) {
			//если есть метамаск
			window.ethereum.request({method: "eth_requestAccounts"}).then((account) => {
				setUserAccount(account[0]);
				getBalance(account[0]);
			})
		} else if (window.web3) {
			provider = window.web3.currentProvider;
		} else {
			alert("Установите МетаМаск!")
		}
	};

	const getBalance = (account) => {
		window.ethereum.request({method: "eth_getBalance", params: [account, "Latest"],}).then((balance) => {
			console.log(balance)	
		})
	};
    

	return(
		<Panel>
			<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
			</PanelHeader>
			<Tabs>
				<TabsItem onClick={go} data-to="home">Главная</TabsItem>
				{/* <TabsItem>Купить билеты</TabsItem> */}
				<TabsItem onClick={go} data-to="inventory">Мои Мероприятия</TabsItem>
				<TabsItem selected onClick={go} data-to="settings">Настройки</TabsItem>
			</Tabs>
			<Group header={<Header mode="secondary">Подключить MetaMask</Header>}>
				<Div>	
					{userAccount ? (
                        <>
                            <span>Кошелек подключен!!!</span>
                        </>
						) : (
							<><h2>Подключите свой кошелек к приложению!</h2>
							<Button stretched size="l" mode="secondary" onClick={onConnect} >Подключить кошелек MetaMask</Button></>
							)}
					{/* <><h2>Подключите свой кошелек к приложению!</h2>
					<Button>Подключить кошелек MetaMask</Button></> */}
				</Div>
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
