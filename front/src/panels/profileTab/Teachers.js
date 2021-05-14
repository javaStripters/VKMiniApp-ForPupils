import {Div, 
        Avatar, 
        PanelHeader, 
        Panel, 
        PanelHeaderBack, 
        SimpleCell, 
        Group} from '@vkontakte/vkui'
import React from 'react'

import Kuzmichev_P from '../../img/Kuzmichev_P.jpg'
import Antonov_D from '../../img/Antonov_D.jpg'
import Afanasev_S from '../../img/Afanasev_S.jpg'
import Prihodko_N from '../../img/Prihodko_N.jpg'
import Minaev_P from '../../img/Minaev_P.jpg'

const Teachers = (props) => {

  return (
    <Panel>
      <PanelHeader
        left={<PanelHeaderBack onClick={props.openNewTabPanel} data-to='profile'/>}
        align='center'
      >
        Преподаватели
      </PanelHeader>
      <Group>
        <Div style={{
          display: 'grid',
          rowGap: '10px'
        }}
        >
          <SimpleCell before={<Avatar size={65} src={Kuzmichev_P}/>} description={'Фронтэндер a.k.a кофепоглотитель'}>Кузьмичев Павел Анатольевич</SimpleCell>
          <SimpleCell before={<Avatar size={65} src={Afanasev_S}/>} description={'Лучший Бэкэндер СНГ'}>Афанасьев Степан Сергеевич</SimpleCell>
          <SimpleCell before={<Avatar size={65} src={Minaev_P}/>} description={'Непревзойденный веб-дизайнер'}>Минаев Павел Андреевич</SimpleCell>
          <SimpleCell before={<Avatar size={65} src={Antonov_D}/>} description={'Умелый верстальщик'}>Антонов Дмитрий Сергеевич</SimpleCell>
          <SimpleCell before={<Avatar size={65} src={Prihodko_N}/>} description={'Дизайнер с нескончаемой фантазией'}>Приходько Анастасия Дмитриевна</SimpleCell>
        </Div>
      </Group>
    </Panel>
  )
}

export default Teachers