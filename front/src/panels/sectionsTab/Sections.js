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
} from "@vkontakte/vkui";
import { Icon28Menu } from "@vkontakte/icons";

function Sections(props) {
  const [sectionData, setSectionData] = useState(null)
  useEffect(() => {
    fetch("https://localhost:10888/somethings")
    //fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then(response => {
        setSectionData(response)
      })
  }, []);

  const ContentCards = (
    sectionData !== null &&
    sectionData.map((element, index) => {
      return (
        <ContentCard 
          className="section-card-item"
          image={element.url}
          header={element.description.substr(0, 25)}
          maxHeight='120px'
          caption={element.description.substr(0, 50)}
        >
        </ContentCard>
      )
    })
  )

  return (
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderButton
            onClick={props.go}
            data-to="categories"
          >
            <Icon28Menu />
          </PanelHeaderButton>
        }
      >
        Секции
      </PanelHeader>
      <Div>
        {/**/}

        <Search />
        <Div className="section-card-container">
          {ContentCards}

          <Card 
            className="section-card-item"
            onClick={props.go}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.go}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.go}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.go}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.go}
            data-to="section">
            <ContentCard className="section-card-item"></ContentCard>
          </Card>
          <Card onClick={props.go}
            data-to="section" className="section-card-item"></Card>
          <Card className="section-card-item"></Card>
          <Card className="section-card-item"></Card>
        </Div>
      </Div>
    </Panel>
  );
}

export default Sections;
