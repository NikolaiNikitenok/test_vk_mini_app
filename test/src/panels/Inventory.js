import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import {ethers} from 'ethers'
import { Button, Group, Panel, PanelHeader, PanelHeaderBack, Div, Header, TabsItem, Tabs, List} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';

import './Persik.css';

const Inventory = ({id, go}) => {

	return(
		<Panel>
			<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
			</PanelHeader>
			<Tabs>
				<TabsItem onClick={go} data-to="home">Главная</TabsItem>
				{/* <TabsItem>Купить билеты</TabsItem> */}
				<TabsItem selected onClick={go} data-to="inventory">Мои билеты</TabsItem>
				<TabsItem onClick={go} data-to="settings">Настройки</TabsItem>
			</Tabs>
			<Group header={<Header mode="secondary">Мои билеты</Header>}>

                {/* Если пусто, то добавить кнопку для перехода в магазин билетов, иначе открыть панель с билетами. */}
                Здесь пусто!
			</Group>
		</Panel>
	)
}

Inventory.propTypes = {
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
// Inventory.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	go: PropTypes.func.isRequired,
// };

export default Inventory;
