import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Header, Button, Group, Cell, Div, Avatar, Tabs, TabsItem } from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';

const Tickets = ({ id, go}) => (
	
	<Panel id={id}>
		<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
		</PanelHeader>
		<Tabs>
			<TabsItem>Главная</TabsItem>
			{/* <TabsItem>Купить билеты</TabsItem> */}
			<TabsItem selected>Мои билеты</TabsItem>
			<TabsItem>Настройки</TabsItem>
        </Tabs>
	</Panel>
);

Home.propTypes = {
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

export default Tickets;
