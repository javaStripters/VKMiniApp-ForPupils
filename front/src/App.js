import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './css/style.css'

import WelcomePage from './panels/WelcomePage'
import RegChild from './panels/registrationForms/RegChild'
import RegParent from './panels/registrationForms/RegParent'
import RegTeacher from './panels/registrationForms/RegTeacher'

const App = () => {
	const [activePanel, setActivePanel] = useState('welcomePage');
	const [fetchedUser, setUser] = useState(null);
  const [isUserAuthorized, setIsUserAutorized] = useState(false)
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
    async function fetchVKData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchVKData();
    
    fetch ('https://localhost:8080/register/' + fetchedUser.id)
      .then(( response ) => { return response.json() })
      .then(( data ) => { console.log(data) })
    
    
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout} >
          {/* Приветственная страница */}
          <WelcomePage id="welcomePage" fetchedUser={fetchedUser} go={go} />
          {/* Формы регистрации пользователей */}
          <RegChild id='regChild' go={go} fetchedUser={fetchedUser} />
          <RegParent id='regParent' go={go} fetchedUser={fetchedUser} />
          <RegTeacher id='regTeacher' go={go} fetchedUser={fetchedUser} />

				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;