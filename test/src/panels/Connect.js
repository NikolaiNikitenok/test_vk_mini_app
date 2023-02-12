// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// // import {ethers} from 'ethers'
// import { Button, Group, Panel, PanelHeader, PanelHeaderBack, Div, Header, TabsItem, Tabs} from '@vkontakte/vkui';
// import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';

// import './Persik.css';

// const Connect = ({id, go}) => {
// 	const [userAccount, setUserAccount] = useState(null);

// 	const onConnect = () => {
// 		if (window.ethereum) {
// 			//если есть метамаск
// 			window.ethereum.request({method: "eth_requestAccounts"}).then((account) => {
// 				setUserAccount(account[0]);
// 				getBalance(account[0]);
// 			})
// 		} else {
// 			alert("Установите МетаМаск!")
// 		}
// 	};

// 	const getBalance = (account) => {
// 		window.ethereum.request({method: "eth_getBalance", params: [account, "Latest"],}).then((balance) => {
// 			console.log(balance)
// 		})
// 	};

// 	return(
// 		<Panel>
// 			<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
// 			</PanelHeader>
// 			<Tabs>
// 				<TabsItem selected onClick={go} data-to="home">Главная</TabsItem>
// 				{/* <TabsItem>Купить билеты</TabsItem> */}
// 				<TabsItem>Мои билеты</TabsItem>
// 				<TabsItem>Настройки</TabsItem>
// 			</Tabs>
// 			<Group header={<Header mode="secondary">Connect MetaMask</Header>}>
// 				<Div>	
// 					{userAccount ? (
// 						<span>Кошелек подключен!!!</span>
// 						) : (
// 							<><h2>Подключите свой кошелек к приложению!</h2>
// 							<Button stretched size="l" mode="secondary" onClick={onConnect} >Подключить кошелек MetaMask</Button></>
// 							)}
// 					{/* <><h2>Подключите свой кошелек к приложению!</h2>
// 					<Button>Подключить кошелек MetaMask</Button></> */}
// 				</Div>
// 			</Group>
// 		</Panel>
// 	)
// }

// Connect.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// 	fetchedUser: PropTypes.shape({
// 		photo_200: PropTypes.string,
// 		first_name: PropTypes.string,
// 		last_name: PropTypes.string,
// 		city: PropTypes.shape({
// 			title: PropTypes.string,
// 		}),
// 	}),
// };
// // Connect.propTypes = {
// // 	id: PropTypes.string.isRequired,
// // 	go: PropTypes.func.isRequired,
// // };

// export default Connect;
