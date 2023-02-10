import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import {ethers} from 'ethers'
import { Button, Group, Panel, PanelHeader, PanelHeaderBack, Div, Header, TabsItem, Tabs, Snackbar, Avatar, CellButton} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk, Icon16Done} from '@vkontakte/icons';

import './Persik.css';

const Settings = ({id, go}) => {
	const [userAccount, setUserAccount] = useState(null);

	const onConnect = () => {
		if (window.ethereum) {
			//если есть метамаск
			window.ethereum.request({method: "eth_requestAccounts"}).then((account) => {
				setUserAccount(account[0]);
				getBalance(account[0]);
			})
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
				<TabsItem onClick={go} data-to="inventory">Мои билеты</TabsItem>
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
