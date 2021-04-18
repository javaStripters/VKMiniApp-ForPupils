import { 
  Panel, 
  PanelHeader, 
  View,
  AppRoot,

} from '@vkontakte/vkui'
import React, {useState} from 'react'

import Sections from './sectionsTab/Sections'
import Categories from './sectionsTab/Categories'
import Section from './sectionsTab/Section'
import Section1 from './sectionsTab/Section1'
import AddSection from './sectionsTab/AddSection'

const SectionsTab = (props) => { 
  const [activeTabPanel, setActiveTabPanel] = useState('sections')
  const [isModal, setIsModal] = useState(false)
  const [activeTabModal, setActiveTabModal] = useState('addSection')

  const openNewTabPanel = (event) => {
		setActiveTabPanel(event.currentTarget.dataset.to);
	};

  const openNewTabModal = (event) => {
    setIsModal(true)
		setActiveTabModal(event.currentTarget.dataset.to);
	};

  return (
    <Panel>
      <View activePanel={activeTabPanel} >
        <Sections id='sections' openNewTabPanel={openNewTabPanel} openNewTabModal={openNewTabModal} userInfoFromDB={props.userInfoFromDB} />
        <Categories id='categories' go={openNewTabPanel} />
        <Section1 id='section1' openNewTabPanel={openNewTabPanel} go={props.go}/>
        <Section id='section' go={openNewTabPanel}/>
        <AddSection id='addSection' openNewTabPanel={openNewTabPanel} userInfoFromDB={props.userInfoFromDB}/>
      </View>
      {/*
      isModal && (
        <div style={{ position: 'fixed', boxSizing: 'border-box', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', padding: '30px', zIndex: '100' }}>
          <div style={{ height: '100%', borderRadius: '8px' }}>
            <AppRoot embedded scroll="contain" >
              <View activePanel={activeTabModal}>
                <AddSection id='addSection' openNewTabPanel={openNewTabPanel}/>
              </View>
            </AppRoot>
          </div>
        </div>
        
      )
      */}
      
    </Panel>
  )
}

export default SectionsTab 