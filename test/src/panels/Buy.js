import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack, Header, Button, Group, Cell, Div, Avatar, Tabs, TabsItem } from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk} from '@vkontakte/icons';

const Buy = ({ id, go}) => (
	
	<Panel id={id}>
		<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}> 
            Покупка билетов
		</PanelHeader>
		
	</Panel>
);

Buy.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Buy;
