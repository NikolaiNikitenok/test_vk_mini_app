import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
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
	FormLayout, 
	FormItem, 
	Input, 
	FormLayoutGroup, 
	CellButton, 
	Select, 
	SegmentedControl, 
	Textarea,
	Checkbox,
	Link,
	Radio
	// unstable_TextTooltip as TextTooltip
} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk, Icon20QuestionCircleFillViolet} from '@vkontakte/icons';
import Web3 from 'web3';

const addressItems = [
  { label: 'Почтовый индекс', name: 'zip' },
  { label: 'Страна', name: 'country' },
  { label: 'Город', name: 'city' },
];

const Create = ({ id, go}) => {

	// Для коннектов
	const [isConnected, setIsConnected] = useState(false);
	const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");
  const [ethAcc, setEthAcc] = useState('');
  const [ethAdd, setEthAdd] = useState('');
  const [popout, setPopout] = useState(null);
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

  const onShowPatronymic = () => setShowPatronymic(true);

  const onRemove = () => setShowPatronymic(false);


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
    window.contract = await new window.web3.eth.Contract(ABI, Address);
		setWalletIsConnected(true);
    // document.getElementById("contractArea").innerHTML = "Connected to smart-contract";
  }


	// Создание мероприятия
	const createEventik = async () => {

		await window.contract.methods.createEvent(name, symbol, description, quantity, format).send({ from: ethAcc });
		setIsCreated(true);

	}


	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}> 
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
			{isConnected && !walletIsConnected && !isCreated && (
				<Div>
					<br/>
					<Button stretched size="l" mode="secondary" onClick={connectContract}>
						Подключиться к контракту
					</Button>
				</Div>
			)}

			{isConnected && walletIsConnected && !isCreated && (
				<Group>
					<FormLayout>


						{/* Email */}
						{/* <FormItem
						top="E-mail"
						status={email ? 'valid' : 'error'}
						bottom={
							email ? '' : 'Обязательное поле!'
						}
						>
						<Input type="email" name="email" value={email} onChange={onChange} />
						</FormItem> */}

						<FormItem
						top="Название мероприятия (20 символов)"
						status={name ? 'valid' : 'error'}
						bottom={
							name ? '' : 'Обязательное поле!'
						}
						>
						<Input type="name" name="name" value={name} onChange={(event) => setName(event.target.value)} maxLength={20}/>
						</FormItem>


						<FormItem
						top="Символ мероприятия (до 5 символов)"
						status={symbol ? 'valid' : 'error'}
						bottom={
							symbol ? '' : 'Обязательное поле!'
						}
						>
						{/* <TextTooltip text="Желательно 3-5 символов!">
							<Icon20QuestionCircleFillViolet/>
						</TextTooltip> */}
						<Input type="symbol" name="symbol" value={symbol} onChange={(event) => setSymbol(event.target.value)} maxLength="5"/>
						</FormItem>


						<FormItem
						top="Количество"
						status={quantity ? 'valid' : 'error'}
						bottom={
							quantity ? '' : 'Обязательное поле!'
						}
						>
						<Input type="number" name="quantity" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
						</FormItem>


						{/* ФИО */}
						{/* <FormLayoutGroup mode="horizontal">
						<FormItem top="Имя">
							<Input />
						</FormItem>
						<FormItem top="Фамилия">
							<Input />
						</FormItem>
						</FormLayoutGroup> */}

						{/* Дополнительное поле: Отчество */}
						{/* {!showPatronymic ? (
						<CellButton onClick={onShowPatronymic}>Указать отчество</CellButton>
						) : (
						<FormItem
							removable
							onRemove={onRemove}
							top="Отчество"
							bottom="Если у вас нет отчества — удалите этот пункт."
						>
							<Input />
						</FormItem>
						)} */}


						{/* Пол */}
						{/* <FormItem top="Пол">
						<Select
							placeholder="Выберите пол"
							options={[
							{
								value: '0',
								label: 'Мужской',
							},
							{
								value: '1',
								label: 'Женский',
							},
							]}
						/>
						</FormItem> */}


						{/* Документ */}
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
						

						{/* Выпадающий список */}
						{/* {addressItems.map(({ label, name }) => (
						<FormItem top={label} key={name}>
							<Input name={name} />
						</FormItem>
						))} */}
						{/* <FormItem
						top="Тип мероприятия"
						bottom={purpose ? '' : 'Пожалуйста, укажите тип вашего мероприятия'}
						// status={purpose ? 'valid' : 'error'}
						>
						<Select
							placeholder="Выберите тип мероприятия"
							onChange={onChange}
							value={purpose}
							name="purpose"
							options={[
							{
								value: '0',
								label: 'Бизнес и финансы',
							},
							{
								value: '1',
								label: 'Обучение',
							},
							{
								value: '2',
								label: 'Развлечения',
							},
							{
								value: '3',
								label: 'Спорт',
							},
							]}
						/>
						</FormItem> */}
						<FormItem 
							top="Коротко о мероприятии"
							bottom="Макс. 200 символов"
						>
							<Textarea type='name' name='description' value={description} onChange={(event) => setDescription(event.target.value)} maxLength={200}/>
						</FormItem>
						<Checkbox checked disabled>
							Согласен с <Link onClick={go} data-to="privacy">политикой конфиденциальности</Link>
						</Checkbox>
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
	);
};

Create.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Create;
