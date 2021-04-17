import React, { useState } from 'react'
import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Avatar,
  Tabbar,
  TabbarItem,
  Counter,
  View,
  TabsItem
} from '@vkontakte/vkui'
import { 
  Icon28BrainOutline,
  Icon28CalendarOutline,
  Icon28HomeOutline, 
  Icon28UserOutline
} from '@vkontakte/icons'

import MainTab from './MainTab'
import SectionsTab from './SectionsTab'
import ProfileTab from './ProfileTab'

const Appbar = (props) => {
  const [activeTab, setActiveTab] = useState('mainTab');
	const openNewTab = (event) => {
		setActiveTab(event.currentTarget.dataset.to);
	};

  return(
    <Panel>
      <View activePanel={activeTab}>
        <MainTab id="mainTab" userInfoFromDB={props.userInfoFromDB} />
        <SectionsTab id="sectionsTab" go={props.go} userInfoFromDB={props.userInfoFromDB} />
        <ProfileTab id="profileTab" userInfoFromDB={props.userInfoFromDB} />
        
      </View>

      <Tabbar style={{zIndex: '50'}}>
        <TabbarItem
          text='Главная'
          onClick={openNewTab}
          data-to="mainTab" 
        >
          <Icon28HomeOutline />
        </TabbarItem>

        <TabbarItem
          text='Кружки'
          onClick={openNewTab}
          data-to="sectionsTab"
        >        
          <Icon28BrainOutline/>
        </TabbarItem>

        <TabbarItem
          text='Профиль'
          onClick={openNewTab}
          data-to="profileTab"
        >
          <Icon28UserOutline />
        </TabbarItem>
      </Tabbar>
    </Panel>
  )
}

export default Appbar