import React from 'react'
import {
  Panel,
  Group, 
  Placeholder, 
  Div,
  Button 
} from '@vkontakte/vkui';

const ChooseRole = (props) => {

  return(
  <Panel>
      <div class="curved-block-before"></div>
      <div class="curved-block"></div>
      <Group>
        <Placeholder
          //icon={<Icon56UsersOutline />}
          header={<p>{props.firstName}, добро пожаловать в {'{Название приложения}'}</p>}
        >
          Пожалуйста, выберете кем Вы являетесь
        </Placeholder>
        <Group>
          <Div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 300px auto',
              gridTemplateRows: 'auto',
              rowGap: '10px'
            }}
          >
            <Button 
              style={{ gridColumn: '2/3' }}
              stretched
              mode="secondary"
              size="m"
              onClick={props.go} 
              data-to="appbar"
            >
              Ученик
            </Button>
            <Button 
              style={{ gridColumn: '2/3' }}
              stretched
              mode="secondary" 
              size="m"
              onClick={props.go} 
              data-to="appbar"
            >
              Родитель
            </Button>
            <Button 
              style={{ gridColumn: '2/3' }}
              stretched
              mode="secondary" 
              size="m"
              onClick={props.go} 
              data-to="regTeacher"
            >
              Преподаватель
            </Button>
          </Div>
        </Group>
      </Group>
  </Panel>
  )
}

export default ChooseRole