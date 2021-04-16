import { 
  Group, 
  Panel,
  PanelHeader,
  Header, 
  HorizontalScroll,
  Link,
  ContentCard
} from '@vkontakte/vkui'
import React,  {useState, useEffect} from 'react'

const HomePage = (props) => {
  const sectionsCardStyles = {
    minWidth: '230px',
    height: '150px',
    margin: '10px'
  }
  const newsCardStyles = {
    minWidth: '300px',
    height: '250px',
    margin: '10px'
  }
  const updatesCardStyles = {
    minWidth: '150px',
    height: '150px',
    margin: '10px'
  }
  
  const [recommendedSectionsItems, setRecommendedSectionsItems] = useState([
    <ContentCard style={sectionsCardStyles}>1</ContentCard>,
    <ContentCard style={sectionsCardStyles}>2</ContentCard>,
    <ContentCard style={sectionsCardStyles}>3</ContentCard>,
    <ContentCard style={sectionsCardStyles}>4</ContentCard>,
    <ContentCard style={sectionsCardStyles}>5</ContentCard>,
    <ContentCard style={sectionsCardStyles}>6</ContentCard>,
    <ContentCard style={sectionsCardStyles}>7</ContentCard>,
    <ContentCard style={sectionsCardStyles}>8</ContentCard>,
    <ContentCard style={sectionsCardStyles}>9</ContentCard>,
    <ContentCard style={sectionsCardStyles}>10</ContentCard>,
    <ContentCard style={sectionsCardStyles}>Просмотреть все</ContentCard>,
  ])
  const [newsItems, setNewsItems] = useState([
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
    <ContentCard style={newsCardStyles}></ContentCard>,
  ])

  const [updatesItems, setUpdatesItems] = useState([
    <ContentCard style={updatesCardStyles}></ContentCard>,
    <ContentCard style={updatesCardStyles}></ContentCard>,
    <ContentCard style={updatesCardStyles}></ContentCard>,
    <ContentCard style={updatesCardStyles}></ContentCard>,
    <ContentCard style={updatesCardStyles}></ContentCard>,
  ])


  const [testValue, setTestValue] = useState('')

  // Тут должны быть получены первые несколько кружков с сервера
  
  useEffect(() => { 
    fetch('')
      .then(response => response.json())
      .then(response => console.log)
      .then(response => setRecommendedSections(response))
  }, [testValue])
  

  

  return(
    <Panel>
      <PanelHeader>Главная</PanelHeader>
      {/* Рекомендуемые кружки */}
      <Group
        header={
          <Header
            aside={<Link onClick={props.go} data-to="sections"> Показать все</Link>}
          >
            Рекомендуемые кружки
          </Header>
        }
      >
        <HorizontalScroll>
          <div style={{display: 'flex'}}>
            {recommendedSectionsItems}
          </div>
        </HorizontalScroll>

      </Group>

      {/* Новости */}
      <Group
        header={<Header aside={<Link onClick={props.go} data-to="news">Показать все</Link>}>Новости</Header>}
      >
        <HorizontalScroll>
          <div style={{display: 'flex'}}>
            {newsItems}
          </div>
        </HorizontalScroll>
      </Group>

      {/* Обновления */}
      <Group
        header={<Header>Обновления</Header>}
      >
        <HorizontalScroll>
          <div style={{display: 'flex'}}>
            {updatesItems}
          </div>
        </HorizontalScroll>
      </Group>
    </Panel>
  )
}

export default HomePage