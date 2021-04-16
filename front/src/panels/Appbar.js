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

const Appbar = () => {
  const [activeTab, setActiveTab] = useState('mainTab');
	const openNewTab = (event) => {
		setActiveTab(event.currentTarget.dataset.to);
	};
  return(
    <Panel>
      <View activePanel={activeTab}>
        <MainTab id="mainTab"/>
        
        <SectionsTab id="sectionsTab"/>
        <ProfileTab id="profileTab"/>
        
      </View>

      <Tabbar>
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