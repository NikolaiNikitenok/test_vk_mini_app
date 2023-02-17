import React from 'react';
import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

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


const containerStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
	};

const Home = ({ id, go}) => {

	const [fetching, setFetching] = React.useState(false);


	// Состояния страниц

	const [homePage, setHomePage] = useState(true)
	const [buyPage, setBuyPage] = useState(false)
	const [createPage, setCreatePage] = useState(false)
	const [settingsPage, setSettingsPage] = useState(false)
	const [inventoryPage, setInventoryPage] = useState(false)
	

	// const initUsers = getRandomUsers(10);
	// console.log(initUsers)

	

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



	// Для интерфейса

	const [name, setName] = React.useState('');
	// const [email, setEmail] = React.useState('');
  // const [purpose, setPurpose] = React.useState('');
  // const [showPatronymic, setShowPatronymic] = React.useState(true);
	const [symbol, setSymbol] = React.useState('');
	const [quantity, setQuantity] = React.useState('');
	const [description, setDescription] = React.useState('');
	const [format, setFormat] = React.useState(false);

	const [isCreated, setIsCreated] = useState(false);
	

  const onChange = (e) => {
    const { name, value } = e.currentTarget;

    const setStateAction = {
			name: setName,
      email: setEmail,
      purpose: setPurpose,
			quantity: setQuantity,
			symbol: setSymbol,
			description: setDescription,
    }[name];

    setStateAction && setStateAction(value);
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
      
				const Address = "0x14A0cc3D250631032c0A1E91036E817adDec51C1";
				setEthAdd(Address)
				window.web3 = await new Web3(window.ethereum);
				window.contract = await new window.web3.eth.Contract(ABI, Address);
				setWalletIsConnected(true);
			
      }
    } catch(err) {
      console.log(err);
    }
  }


	// Создание мероприятия
	const createEventik = async () => {

		await window.contract.methods.createEvent(name, symbol, description, quantity, format).send({ from: ethAcc });
		setIsCreated(true);

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
						</Div>
					</Group>
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
								

								{/* О Мероприятии */}
								<FormItem 
									top="Коротко о мероприятии"
									bottom="Макс. 200 символов"
								>
									<Textarea type='name' name='description' value={description} onChange={(event) => setDescription(event.target.value)} maxLength={200}/>
								</FormItem>
								<Checkbox checked disabled>
									Согласен с <Link onClick={go} data-to="privacy">политикой конфиденциальности</Link>
								</Checkbox>

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
					<Group header={<Header mode="secondary">Мои билеты</Header>}>
		
						{/* Если пусто, то добавить кнопку для перехода в магазин билетов, иначе открыть панель с билетами. */}
						<h2>Здесь пусто!</h2>
					</Group>
					<Group header={<Header mode="secondary">Созданные Мероприятия</Header>}>
		
						{/* Если пусто, то добавить кнопку для перехода в магазин билетов, иначе открыть панель с билетами. */}
						<h2>Здесь пусто!</h2>
					</Group>
				</Panel>
			)}


			{buyPage && (
				<Panel id={id}>
				<PanelHeader left={<PanelHeaderBack onClick={setHomeBuy}/>}> 
								Покупка билетов
				</PanelHeader>
				
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
