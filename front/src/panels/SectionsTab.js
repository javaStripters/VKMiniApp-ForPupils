import { 
  Panel, 
  PanelHeader, 
  View,
} from '@vkontakte/vkui'
import React, {useState} from 'react'

import Sections from './sectionsTab/Sections'
import Categories from './sectionsTab/Categories'
import Section from './sectionsTab/Section'

const SectionsTab = () => { 
  const [activeTabPanel, setActiveTabPanel] = useState('sections')

  const openNewTabPanel = (event) => {
		setActiveTabPanel(event.currentTarget.dataset.to);
	};

  return (
    <Panel>
      <View activePanel={activeTabPanel} >
        <Sections id='sections' go={openNewTabPanel} />
        <Categories id='categories' go={openNewTabPanel} />
        <Section id='section' go={openNewTabPanel}/>
      </View>
    </Panel>
  )
}

export default SectionsTab 