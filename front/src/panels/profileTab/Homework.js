import { Card, Div, Group, Title, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'
import React, {useState} from 'react'

const Homework = (props) => {


  const [currentObject, setCurrentObject] = useState ('Программирование на Python')
  const [nearDate, setNearDate] = useState ('16 апреля')
  const [subjectDate, setSubjectDate] = useState ('10 апреля')
  const [homeworkName, setHomeworkName] = useState ('Изучение библиотек для создания чат-бота')
  const [homeworkComment, setHomeworkComment] = useState ('https://neurohive.io/ru/tutorial/kak-sozdat-chat-bota-s-nulja-na-python-instrukcija/')

  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack 
            onClick={props.go}
            data-to="schedule"
          />
        }
        align='center'
      >
        Домашнее задание
      </PanelHeader>
      <Div>
        <Group>
          <Title level="1" weight="semibold">{currentObject}</Title> 
            <Div style={{ 
                padding:'0px',
                marginTop:'10px', 
                textTransform:'uppercase', 
                color:'var(--text_secondary)', 
                fontSize: '14px' 
                }}
              >
                Ближайший урок
            </Div>

            <Div style={{ 
              padding:'0px', 
              marginTop:'10px', 
              fontSize:'18px' 
              }}
            >
              {nearDate}
            </Div>

            <Div style={{ 
              padding:'0px',
              marginTop:'10px', 
              textTransform:'uppercase', 
              color:'var(--text_secondary)', 
              fontSize: '14px' 
              }}
            >
              Домашние задания
            </Div>

            <Div style={{
              marginTop: '14px',
              padding:'0px',
              display: 'grid',
              gridTemplateColumns: '100%',
              gridTemplateRows: 'auto',
              rowGap: '20px'
            }}>
              <Card>
                <Div>
                  <Title level="3" weight="semibold">{subjectDate}</Title>
                  <Title style={{ marginTop: '10px' }} level="1" weight="semibold">{homeworkName}</Title>
                  <div style={{ marginTop: '15px' }}>{homeworkComment}</div>
                </Div>  
              </Card>
              <Card>
                <Div>
                  <Title level="3" weight="semibold">{subjectDate}</Title>
                  <Title style={{ marginTop: '10px' }} level="1" weight="semibold">{homeworkName}</Title>
                  <div style={{ marginTop: '15px' }}>{homeworkComment}</div>
                </Div>  
              </Card>
              <Card>
                <Div>
                  <Title level="3" weight="semibold">{subjectDate}</Title>
                  <Title style={{ marginTop: '10px' }} level="1" weight="semibold">{homeworkName}</Title>
                  <div style={{ marginTop: '15px' }}>{homeworkComment}</div>
                </Div>  
              </Card>
            </Div>

        </Group>
      </Div>
    </Panel>
  )
}

export default Homework