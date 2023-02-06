import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Header, Button, Group, Cell, Div, Avatar, Tabs, TabsItem } from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';


const containerStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
  };

const Home = ({ id, go}) => (
	
	<Panel id={id}>
		<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
			
		</PanelHeader>
		<Tabs>
			<TabsItem selected>Главная</TabsItem>
			{/* <TabsItem>Купить билеты</TabsItem> */}
			<TabsItem>Мои билеты</TabsItem>
			<TabsItem>Настройки</TabsItem>
        </Tabs>

		{/* <Group header={<Header mode="secondary">Navigation</Header>}>
			<div>
				<Div>
					<Button stretched size="l" appearance="positive" mode="secondary" onClick={go} data-to="home">
						Main
					</Button>
					<br/>
					<Button stretched size="l" mode="secondary" onClick={go} data-to="inventory">
						Inventory
					</Button>
					<br/>
					<Button stretched size="l" mode="secondary" onClick={go} data-to="buy">
						Купить билеты
					</Button>
				</Div>
			</div>
		</Group> */}
		<br/>
		<Group header={<Header mode="secondary">Events</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="home">
					Купить билеты
				</Button>
				<br/>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="inventory">
					Подключить кошелек
				</Button>
			</Div>
		</Group>
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

export default Home;
