import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
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
	// unstable_TextTooltip as TextTooltip
} from '@vkontakte/vkui';
import {Icon28SettingsOutline, Icon28LogoVk, Icon20QuestionCircleFillViolet} from '@vkontakte/icons';

const addressItems = [
  { label: 'Почтовый индекс', name: 'zip' },
  { label: 'Страна', name: 'country' },
  { label: 'Город', name: 'city' },
];

const Create = ({ id, go}) => {

const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
  const [purpose, setPurpose] = React.useState('');
  const [showPatronymic, setShowPatronymic] = React.useState(true);
	const [quantity, setQuantity] = React.useState('')
	const [symbol, setSymbol] = React.useState('')

  const onChange = (e) => {
    const { name, value } = e.currentTarget;

    const setStateAction = {
			name: setName,
      email: setEmail,
      purpose: setPurpose,
			quantity: setQuantity,
			symbol: setSymbol,
    }[name];

    setStateAction && setStateAction(value);
  };

  const onShowPatronymic = () => setShowPatronymic(true);

  const onRemove = () => setShowPatronymic(false);

	return (
		<Panel id={id}>
			<PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}> 
				Создание мероприятия
			</PanelHeader>
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
					top="Название мероприятия"
					status={symbol ? 'valid' : 'error'}
					bottom={
						symbol ? '' : 'Обязательное поле!'
					}
					>
					<Input type="symbol" name="symbol" value={symbol} onChange={onChange} />
					</FormItem>

					<FormItem
					top="Символ мероприятия"
				
					status={name ? 'valid' : 'error'}
					bottom={
						name ? '' : 'Обязательное поле!'
					}
					>
					{/* <TextTooltip text="Желательно 3-5 символов!">
						<Icon20QuestionCircleFillViolet/>
					</TextTooltip> */}
					<Input type="name" name="name" value={name} onChange={onChange} />
					</FormItem>

					<FormItem
					top="Количество"
					status={quantity ? 'valid' : 'error'}
					bottom={
						quantity ? '' : 'Обязательное поле!'
					}
					>
					<Input type="number" name="quantity" value={quantity} onChange={onChange} />
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
					<SegmentedControl
						size="m"
						name="type"
						options={[
						{
							label: 'Оффлайн',
							value: 'False',
						},
						{
							label: 'Онлайн',
							value: 'True',
						},
						]}
					/>
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
					<FormItem top="Коротко о мероприятии">
					<Textarea />
					</FormItem>
					<Checkbox checked disabled>
					Согласен с <Link onClick={go} data-to="privacy">политикой конфиденциальности</Link>
					</Checkbox>
					<FormItem>
					<Button size="l" stretched>
						Зарегистрировать мероприятие
					</Button>
					</FormItem>
				</FormLayout>
			</Group>
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
