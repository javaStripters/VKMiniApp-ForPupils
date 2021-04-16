import { Icon24Back, Icon28MessagesOutline } from '@vkontakte/icons'
import { ContentCard, Div, Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton, Search } from '@vkontakte/vkui'
import React from 'react'

const Categories = (props) => {

  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack 
            onClick={props.go}
            data-to="sections"
          />
        }
        right={(
          <PanelHeaderButton
           
          >
            <Icon28MessagesOutline />
          </PanelHeaderButton>
        )}
      >
        Категории
      </PanelHeader>

      <Div>
        <Search />
        <Div className="category-card-container">
        <ContentCard className="category-card-item"></ContentCard>
        <ContentCard className="category-card-item"></ContentCard>
        <ContentCard className="category-card-item"></ContentCard>
        <ContentCard className="category-card-item"></ContentCard>
        <ContentCard className="category-card-item"></ContentCard>
        <ContentCard className="category-card-item"></ContentCard>
        <ContentCard className="category-card-item"></ContentCard>
        </Div>
      </Div>

    </Panel>
  )
}

export default Categories