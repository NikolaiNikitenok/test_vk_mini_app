// import React, { useState, useEffect, usePlatform } from 'react';
// import PropTypes from 'prop-types';
// import bridge from '@vkontakte/vk-bridge';
// import '@vkontakte/vkui/dist/vkui.css';

// import { 
//   AdaptivityProvider,
//   Panel,
//   PanelHeader,
//   PanelHeaderBack,
//   eader,
//   Button,
//   Group,
//   Cell, 
//   Div, 
//   Avatar,
//   Counter,
//   FormItem,
//   Select,
//   Checkbox,
//   Platform,
//   View,
//   PanelHeaderButton
// } from '@vkontakte/vkui';

// import {
//   Icon12Tag,
//   Icon12Add,
//   Icon16Add,
//   Icon24Add,
//   Icon24ChevronCompactRight,

// } from '@vkontakte/icons'

// const Buy = () => {
//   const [mode, setMode] = React.useState('all');
//   const [menuOpened, setMenuOpened] = React.useState(false);
//   const [selected, setSelected] = React.useState('news');

//   return (
//     <View activePanel="panel">
//       <Panel id="panel">
//         <PanelHeader
//           before={
//             <PanelHeaderButton>
//               <Icon28CameraOutline />
//             </PanelHeaderButton>
//           }
//           after={
//             <PanelHeaderButton>
//               <Icon28AddOutline />
//             </PanelHeaderButton>
//           }
//         >
//           <DefaultInPanel
//             selected={selected}
//             setSelected={setSelected}
//             menuOpened={menuOpened}
//             onMenuClick={(opened) => {
//               setMenuOpened((prevState) => (opened ? !prevState : false));
//             }}
//           />
//         </PanelHeader>

//         {selected === 'news' && (
//           <Group id="tab-content-news" aria-labelledby="tab-news" role="tabpanel">
//             <Div>Контент новостей</Div>
//           </Group>
//         )}
//         {selected === 'recommendations' && (
//           <Group
//             id="tab-content-recommendations"
//             aria-labelledby="tab-recommendations"
//             role="tabpanel"
//           >
//             <Div>Контент рекомендаций</Div>
//           </Group>
//         )}

//         <Scrollable />

//         <PanelHeaderContext opened={menuOpened} onClose={() => setMenuOpened(false)}>
//           <List>
//             <Cell
//               before={<Icon28UsersOutline />}
//               after={mode === 'all' && <Icon24Done fill="var(--vkui--color_icon_accent)" />}
//               onClick={() => setMode('all')}
//             >
//               Communities
//             </Cell>
//             <Cell
//               before={<Icon28SettingsOutline />}
//               after={mode === 'managed' && <Icon24Done fill="var(--vkui--color_icon_accent)" />}
//               onClick={() => setMode('managed')}
//             >
//               Managed Communities
//             </Cell>
//           </List>
//         </PanelHeaderContext>
//       </Panel>
//     </View>
//   );
// };

// const DefaultInPanel = ({ menuOpened, onMenuClick, selected, setSelected }) => {
//   return (
//     <Tabs>
//       <TabsItem
//         after={
//           <Icon16Dropdown
//             style={{
//               transform: `rotate(${menuOpened ? '180deg' : '0'})`,
//             }}
//           />
//         }
//         selected={selected === 'news'}
//         onClick={() => {
//           if (selected === 'news') {
//             onMenuClick(true);
//           }
//           setSelected('news');
//         }}
//         id="tab-news"
//         aria-controls="tab-content-news"
//       >
//         Новости
//       </TabsItem>
//       <TabsItem
//         selected={selected === 'recommendations'}
//         onClick={() => {
//           onMenuClick(false);
//           setSelected('recommendations');
//         }}
//         id="tab-recommendations"
//         aria-controls="tab-content-recommendations"
//       >
//         Интересное
//       </TabsItem>
//     </Tabs>
//   );
// };


// <ConfigProvider webviewType="internal">
//   <Buy />
// </ConfigProvider>;

//   export default Buy