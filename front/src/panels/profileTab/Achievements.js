import { Icon28FavoriteOutline, Icon56FavoriteOutline } from '@vkontakte/icons'
import { 
  Panel, 
  PanelHeader, 
  PanelHeaderBack
} from '@vkontakte/vkui'
import React from 'react'

const Achievements = (props) => {

  return(
    <Panel>
      <PanelHeader 
        left={<PanelHeaderBack onClick={props.openNewTabPanel} data-to='profile'/>}
      >
        Достижение
      </PanelHeader>

      <div
        style={{
          display: 'flex',
          height: '400px'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div>
            <Icon56FavoriteOutline />
          </div>
          <p>Здесь будут отображаться добавленные Вами награды</p>
        </div>
      </div>
    </Panel>
  )
}

export default Achievements 