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

const ProfileTab = (props) => {
  const [activePanel, setActivePanel] = useState('profile')
  
  return (
    <View activePanel={activePanel}>
      <Profile id='profile' />

    </View>
  )
}

export default ProfileTab