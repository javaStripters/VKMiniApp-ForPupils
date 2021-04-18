import {Card, 
        PanelHeaderBack, 
        Separator, 
        Panel, 
        PanelHeader, 
        Group, 
        FormItem, 
        Select, 
        Title, 
        Div,
        Placeholder,
        Button,
        Avatar} from '@vkontakte/vkui'
import React from 'react'

import IconGraduated from '../../img/graduated.svg'
import IconSuccess from '../../img/success.svg'
import IconGoal from '../../img/goal.svg'
import IconCalendar from '../../img/calendar.svg'
import IconNegativeReview from '../../img/negative-review.svg'
import IconLoupe from '../../img/loupe.svg'

const Productivity = (props) => {

  const itemSize = {
    height: '200px',
    width: '360px',
  }

  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack />
        }
      align="center"
      >
        Успеваемость
      </PanelHeader>
        <Group>
          <FormItem top="Статистика">
            <Select
              placeholder="Общее"
            />
          </FormItem>

            <Separator />
          <Div>
          <Title level='1' weight='semibold'>Оценки</Title>
          </Div>
          <Div>
          <Card>
          <Div style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto auto',
            gridTemplateRows: 'auto auto',
            rowGap: '10px',
            columnGap: '15px',
            fontSize: '30px',
            textAlign: 'center'
          }}>
            <div>😭</div>
            <div>😞</div>
            <div>😐</div>
            <div>🙂</div>
            <div>😃</div>

            <div>0</div>
            <div>2</div>
            <div>1</div>
            <div>6</div>
            <div>3</div>
          </Div>
          </Card>
          </Div>

          <Placeholder>Тут будет график</Placeholder>

          <Separator />

          <Div>
            <Title level='1' weight='semibold'>Ачивки</Title>
          </Div>

          <Div style={{
            display: 'grid',
            gridTemplateColumns:'auto auto auto auto',
            gridTemplateRows:'auto auto',
            rowGap:'15px',
            columnGap: '32px',
          }}>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Avatar size={150} src={IconGraduated}></Avatar>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Avatar size={150} src={IconSuccess}></Avatar>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Avatar size={150} src={IconGoal}></Avatar>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Avatar size={150} src={IconCalendar}></Avatar>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Avatar size={150} src={IconNegativeReview}></Avatar>
            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Avatar size={150} src={IconLoupe}></Avatar>
            </div>
          </Div>

        </Group>
    </Panel>
  )
}

export default Productivity