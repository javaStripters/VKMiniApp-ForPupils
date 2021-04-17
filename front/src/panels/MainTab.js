import React, {useState} from 'react'
import { 
  Panel, 
  PanelHeader, 
  View
} from '@vkontakte/vkui'


import HomePage from './mainTab/HomePage'

const MainTab = () => {

  const [activeTabPanel, setActiveTabPanel] = useState('homePage')

 
  const openNewTabPanel = (event) => {
		setActiveTabPanel(event.currentTarget.dataset.to);
	};
  

  return(
    <View activePanel={activeTabPanel}>
      <HomePage id="homePage" go={openNewTabPanel} />
    </View>
  )
}

export default MainTab