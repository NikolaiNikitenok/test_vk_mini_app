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

const Home = () => {


	let contAdress = ''
	let userAdress = ''

	const[contractik, setContractik] = useState('')
	const[adressok, setAdressok] = useState('')
	const[ethBalance, setEthBalance] = useState('')
	const[ethAcc, setEthAcc] = useState('')
	const[isConnected, setIsConnected] = useState(false)
	const[ethAdd, setEthAdd] = useState(false)
	const[walletIsConnected, setWalletIsConnected] = useState(false)
	const[miniBlock, setMiniBlock] = useState([])

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

	const onConnect = async () => {
		try {
			const currentProvider = detectCurrentProvider();
			const ABI = [{"inputs":[{"internalType":"address","name":"_tiketStor","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"tiketStor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_collection","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"verifier","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]

			if(currentProvider) {
        
        await currentProvider.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        console.log(account);

				console.log(window.location.hash)

        // setDoneScreenSpinner();
        setEthBalance(ethBalance);
        setEthAcc(account)
        setIsConnected(true);
      
				const Address = "0x59a195a6524b231Ce41F3Cbc8263d57F426E90E0";
				setEthAdd(Address)
				window.web3 = await new Web3(window.ethereum);
				window.contract = await new window.web3.eth.Contract(ABI, Address);
				setWalletIsConnected(true);

				
				
				let hashik = (window.location.hash).substring(1);
				let hashikMass = []
				hashikMass = hashik.split('/')
				contAdress = hashikMass[1]
				setContractik(contAdress)
				userAdress = hashikMass[0]
				setAdressok(userAdress)

				console.log(contAdress)
				console.log(userAdress)
		


				// counter
			
      }
    } catch(err) {
      console.log(err);
    }


		
  }


	// const useHash = () => {
	// 	const [hash, setHash] = React.useState(() => window.location.hash);
	
	// 	const hashChangeHandler = React.useCallback(() => {
	// 		setHash(window.location.hash);
	// 	}, []);
	
	// 	React.useEffect(() => {
	// 		window.addEventListener('hashchange', hashChangeHandler);
	// 		return () => {
	// 			window.removeEventListener('hashchange', hashChangeHandler);
	// 		};
	// 	}, []);
	
	// 	const updateHash = React.useCallback(
	// 		newHash => {
	// 			if (newHash !== hash) window.location.hash = newHash;
	// 		},
	// 		[hash]
	// 	);
	
	// 	return [hash, updateHash];
	// };

	const checkVal = async () => {
		const cop = []

		setAdressok(userAdress);
		setContractik(contAdress)
		const perem = await window.contract.methods.verifier(contractik, adressok).call({ from: ethAcc });
		console.log(perem)

		if (perem) {

			alert("Вы можете пройти на мероприятие!")
		}
		if (!perem) {

			alert("Вы НЕ можете пройти на мероприятие!")
		}
		// setMiniBlock(cop)
		
	}

	return(
		<Panel>
			<PanelHeader left={<Icon28LogoVk/>}> Verify
						
			</PanelHeader>
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
					<>
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
							<FormLayout>

								{/* Название */}
								{/* <FormItem
								top="Контракт"
								status={contAdress ? 'valid' : 'error'}
								bottom={
									contAdress ? '' : 'Обязательное поле!'
								}
								>
								<Input type="name" name="name" onChange={(event) => setContractik(event.target.value)}/>
								</FormItem>
								<FormItem
								top="Адрес"
								status={userAdress ? 'valid' : 'error'}
								bottom={
									userAdress ? '' : 'Обязательное поле!'
								}
								>
								<Input type="name" name="name"onChange={(event) => setAdressok(event.target.value)}/>
								</FormItem> */}

								<Button size="l" onClick={checkVal}>Проверить наличие</Button>

								{miniBlock}

							</FormLayout>
							
						</div>

						<br/>
					</Div>
					</>
				)}
			</Group>
		</Panel>
	)
}

export default Home;
