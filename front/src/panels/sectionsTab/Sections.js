import React, { useEffect, useState } from "react";
import {
  PanelHeader,
  Panel,
  Div,
  Search,
  Card,
  ContentCard,
  CardGrid,
  PanelHeaderButton,
  Button,
  CellButton,
  Group,
} from "@vkontakte/vkui";
import { Icon28AddOutline, Icon28Menu } from "@vkontakte/icons";

function Sections(props) {
  const [sectionData, setSectionData] = useState(null)
  const [addSectionButton, setAddSectionButton] = useState(null)
  const [server, setServer] = useState('http://localhost:8080/')


  
  useEffect(() => {
    if (props.userInfoFromDB) {
      if (props.userInfoFromDB.type === 'Tutor') {
        setAddSectionButton(
          <CellButton
            centered 
            before={<Icon28AddOutline />}
            /*onClick={props.openNewTabModal}*/
            onClick={props.openNewTabPanel}
            data-to='addSection'
          >Добавить секцию</CellButton>
        )
      }
    }
  }, [])
  
  

  useEffect(() => {
    fetch(server + 'sections')
      .then((response) => response.json())
      .then(response => {
        setSectionData(response)
      })
  }, []);

  const ContentCards = (
    sectionData !== null &&
    sectionData.map((element, index) => {
      console.log(imagePath + element.cover)
      return (
        <Card
          onClick={props.openNewTabPanel}
          data-to="section"
        >
          <ContentCard 
            className="section-card-item"
            image={server + 'upload/' + element.cover}
            header={element.organizationName}
            maxHeight='120px'
            caption={element.description.substr(0, 60) + '...'}
          >
          </ContentCard>
        </Card>
          
      )
    })
  )

  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderButton
            onClick={props.openNewTabPanel}
            data-to="categories"
          >
            <Icon28Menu />
          </PanelHeaderButton>
        }
      >
        Секции
      </PanelHeader>
      <Div>
        

        <Search />
        
        {addSectionButton}
          
        <Div className="section-card-container">
          {ContentCards}

          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card onClick={props.openNewTabPanel}
            data-to="section" className="section-card-item"></Card>
          <Card className="section-card-item"></Card>
          <Card className="section-card-item"></Card>
        </Div>
      </Div>
    </Panel>
  );
}

export default Sections;
