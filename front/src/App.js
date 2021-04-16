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
import Appbar from './panels/Appbar';
import Schedule from './panels/profileTab/Sсhedule'

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
			console.log(user.id)
			setPopout(null);
		}
		fetchVKData();
	}, [])
  


	
	useEffect(() => {
		if (fetchedUser) {
			fetch ('http://localhost:8080/register/' + fetchedUser.id)
				.then(( response ) => { return response.json() })
				.then(( data ) => { console.log(data) })
				.then(( data ) => setIsUserAutorized(data))
		}
	}, [fetchedUser])
	

	//const data = useFetch('https://localhost:8080/register/' + 201119641)
	//console.log(!data ? 'Loading...' : data)

	useEffect(() =>{
		console.log(isUserAuthorized)
		if (isUserAuthorized !== false) {
			console.log(isUserAuthorized)
			console.log('heh')
			setActivePanel('appbar')
		}
	}, [isUserAuthorized])
	

	console.log(activePanel)


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
					{/* Основная часть приложения -- Appbar */}
					<Appbar id='appbar' go={go}/>
					{/* Профиль пользователя */}
					<Schedule id='schedule' />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;