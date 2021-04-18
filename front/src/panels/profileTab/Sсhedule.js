import { SimpleCell, Button, Card, Separator, Header, Title, Div, Panel, Group, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import React, {useState} from 'react'

const Schedule = (props) => {

  const [CurrentObject, setCurrentObject] = useState ('Программирование на Python')
  const [CurrentDate, setCurrentDate] = useState ('14 апреля, среда')
  const [CurrentSchedule, setCurrentSchedule] = useState ('pererivchik na obed')
  const [CurrentTeacher, setCurrentTeacher] = useState ('Данил Даньшин')

  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack
            label="Назад"
            onClick={props.go}
            data-to='profileTab'
          />
        }
        align="center"
      >
        Расписание
      </PanelHeader>
      <Div>
        <Group>
          {/* Вывод тайтла в зависимости от выбранной секции */}
          <Title level="1" weight="semibold">{CurrentObject}</Title> 
            <Div style={{ 
              padding:'0px',
              marginTop:'10px', 
              textTransform:'uppercase', 
              color:'var(--text_secondary)', 
              fontSize: '14px' 
              }}
            >
              На дату
            </Div>

              <Div style={{ 
                padding:'0px', 
                marginTop:'10px', 
                fontSize:'18px' 
                }}
              >
                {CurrentDate}
              </Div>
        </Group>
      </Div>

      <Separator />         

      <Div>
        <Group>
          <Div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          >
            <Div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto',
                rowGap: '10px'
              }}
            >
              <div>Проверка домашнего задания - 16:45 - 17:30<br/>Перерыв - 17:30 - 17:45
<br/>Изучение нового материала - 17:45 - 19:00</div>
            </Div>
            <Div>
              <Button mode="outline">Домашнее задание</Button>
            </Div>
          </Div>
        </Group>
      </Div>

      <Separator />

      <Div> 
        <Group>
          <Title level="2" weight="semibold">Преподаватель</Title> 
            <Div style={{padding:'0px'}}>
              <SimpleCell
                disabled
                before="Avatar" // Аватарка пользователя через компонент <Avatar />
              >
                {CurrentTeacher}
              </SimpleCell>
            </Div>
        </Group>
      </Div>

    </Panel>
  )
}

export default Schedule