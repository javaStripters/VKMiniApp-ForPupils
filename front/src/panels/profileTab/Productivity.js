import {Card, 
        PanelHeaderBack, 
        Separator, 
        Panel, 
        PanelHeader, 
        Group, 
        FormItem, 
        Select, 
        Title, 
        Div} from '@vkontakte/vkui'
import React from 'react'

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
        </Group>
    </Panel>
  )
}

export default Productivity