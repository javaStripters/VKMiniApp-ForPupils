import React, { useState, useEffect } from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import {Cell} from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';
import { View } from '@vkontakte/vkui';

import ChooseRole from './ChooseRole';
import Introduction from './Introduction';


const WelcomePage = props => {

  const [activeTab, setActiveTab] = useState('introduction')

  const firstName = props.fetchedUser ? props.fetchedUser.first_name : null
  //console.log(props.fetchedUser ? props.fetchedUser.first_name : null)

  const openNewTab = (event) => {
		setActiveTab(event.currentTarget.dataset.to);
	};
  
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={
          activeTab === 'chooseRole' ? 
          <PanelHeaderBack onClick={openNewTab} data-to="introduction"/>
          : null
        }
        
      >
        {'{Название приложения}'}
      </PanelHeader>
      <View activePanel={activeTab}>
        <Introduction id='introduction' openNewTab={openNewTab}/>
        <ChooseRole id='chooseRole' firstName={firstName} go={props.go}/>
      </View>
      

      
      
      
    </Panel>
  )
}

export default WelcomePage