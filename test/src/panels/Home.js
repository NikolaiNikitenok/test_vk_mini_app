import React from 'react';
import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Header, Button, Group, Cell, Div, Avatar, Tabs, TabsItem, List, Footer, PopoutWrapper} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';


const containerStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
	};

const Home = ({ id, go}) => {

	const [fetching, setFetching] = React.useState(false);

	// const initUsers = getRandomUsers(10);
	// console.log(initUsers)

	return(	
		<>
		
			<Panel id={id}>
				<PanelHeader left={<Icon28LogoVk/>}> NFT for Events
					
				</PanelHeader>
				<Tabs>
					<TabsItem selected onClick={go} data-to="home">
						Главная
					</TabsItem>
					{/* <TabsItem>Купить билеты</TabsItem> */}
					<TabsItem onClick={go} data-to="inventory">Мои Мероприятия</TabsItem>
					<TabsItem onClick={go} data-to="settings">Настройки</TabsItem>
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
				<Group header={<Header mode="secondary">Мероприятия</Header> }>
					<Div>
						<Button stretched size="l" mode="secondary" onClick={go} data-to="buy">
							Купить билеты
						</Button>
						<br/>
						<Button stretched size="l" mode="secondary" onClick={go} data-to="create">
							Создать мероприятие
						</Button>
						{/* <PopoutWrapper alignY="center" alignX="center">
							Some content
						</PopoutWrapper>; */}
					</Div>
				</Group>
				
			
				{/* <Group>
					<List>
						<Cell subtitle="Back-end">
							Никита Можаев
						</Cell>
						<Cell before={<Avatar src="../img/nikolai.jpg"/>} subtitle="Front-end">
							Никитенок Николай
						</Cell>
				
						{users.map(({ id, name, photo_100 }, i) => {
							return (
								<Cell key={i} before={<Avatar src={photo_100} />}>
									{name}
								</Cell>
					</List>
				</Group>
				<Footer>2 Создателя</Footer> */}
			</Panel>
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
