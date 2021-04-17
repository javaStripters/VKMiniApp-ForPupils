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

const ProfileTab = (props) => {
  
  const [activePanel, setActivePanel] = useState('profile')
  
  return (
    <View activePanel={activePanel}>
      <Profile id='profile' userInfoFromDB={props.userInfoFromDB}/>
      <Schedule id='shedule' />
      <Homework id='homework' />

    </View>
  )
}

export default ProfileTab