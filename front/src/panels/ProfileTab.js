import { 
  ContentCard, 
  Div, 
  Separator, 
  CardGrid, 
  Card, 
  Button, 
  Panel, 
  PanelHeader, 
  SimpleCell, 
  Group, 
  Header, 
  Icon28FavoriteOutline,
  Icon28BillheadOutline,
  Icon28SettingsOutline, 
  Icon28SmileOutline,
  View
} from '@vkontakte/vkui'
import React, {useState} from 'react'

import Profile from './profileTab/Profile'
import Schedule from './profileTab/Sсhedule'
import Homework from './profileTab/Homework'
import Productivity from './profileTab/Productivity'
import Teachers from './profileTab/Teachers'
import Achievements from './profileTab/Achievements'

const ProfileTab = (props) => {
  
  const [activeTabPanel, setActiveTabPanel] = useState('profile')
  
  const openNewTabPanel = (event) => {
		setActiveTabPanel(event.currentTarget.dataset.to);
	};
  return (
    <View activePanel={activeTabPanel}>
      <Profile id='profile' openNewTabPanel={openNewTabPanel} userInfoFromDB={props.userInfoFromDB}/>
      <Schedule id='schedule' openNewTabPanel={openNewTabPanel} />
      <Homework id='homework' openNewTabPanel={openNewTabPanel} />
      <Productivity id='productivity' openNewTabPanel={openNewTabPanel} />
      <Teachers id='teachers' openNewTabPanel={openNewTabPanel} />
      <Achievements id='achievements' openNewTabPanel={openNewTabPanel}/>
    </View>
  )
}

export default ProfileTab