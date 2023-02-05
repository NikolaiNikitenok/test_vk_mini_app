import React from 'react';
import ReactDOM from 'react-dom';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  // Header,
  // Group,
  // SimpleCell,
  // Placeholder,
  usePlatform, 
  useAdaptivityConditionalRender,
  // ModalRoot,
  // ModalPage,
  // ModalPageHeader,
  // CellButton,
  Platform,
  // Cell,
  // Separator,
  // Avatar,
  // Alert,
  // Button,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {
  // Icon56UsersOutline,
  // Icon56MentionOutline,
  // Icon56MessageReadOutline,
} from '@vkontakte/icons';


function App() {

  const platform = usePlatform();
  const isVKCOM = platform === Platform.VKCOM;
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout header={!isVKCOM && <PanelHeader separator={false} />}>
            {viewWidth.tabletPlus && (
              <SplitCol width={280} className={viewWidth.tabletPlus.className}>
                <Panel id="nav">Navigation</Panel>
              </SplitCol>
            )}
            <SplitCol autoSpaced>
              <View activePanel="profile">
                <Panel id="profile">Profile</Panel>
              </View>
            </SplitCol>
          </SplitLayout>;
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

const MainScreens = () => {
  return (
    <View activePanel="profile">
      <Panel id="profile">Profile</Panel>
    </View>
  );
};

const SideCol = () => {
  return <Panel id="nav">Navigation</Panel>;
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App