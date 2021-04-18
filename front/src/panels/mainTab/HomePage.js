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

import star from '../../img/star.svg'
import basketball from '../../img/basketball.jpg'
import chess from '../../img/chess.jpg'
import reloadIcon from '../../img/reload-icon.svg'


const HomePage = (props) => {
  const sectionsCardStyles = {
    minWidth: '250px',
    margin: '10px'
  }
  const newsCardStyles = {
    minWidth: '300px',
    margin: '10px'
  }
  const updatesCardStyles = {
    minWidth: '150px',
    margin: '10px'
  }
  
  const [recommendedSectionsItems, setRecommendedSectionsItems] = useState([
    <ContentCard 
      style={sectionsCardStyles}
      className="section-card-item"
      image={'https://s3-alpha-sig.figma.com/img/97c4/323c/d5d5dbdffc90077f69b02511b531aca5?Expires=1619395200&Signature=U~aZMLLRhlpA8GwWAKPfuu5NFpLXIg7HJjcgu7maNbyYqlHo7NlEnOwf4PFzNaLTSN7BDMhIl9IeL5TZ0ihq4ChLMyKOkoRD0iWidC7Ju6~z6W26fgU6wxUYCX5ISiFPPri538clE38ydA39zPFHAiRztKO-PS2lxOhIsw4McPCJKko0yqB-4tpKrbgUEUdGdSwLvTImz0w6e6DpeqgZdNm152HRVe6yucIYZgxnLrFuZB9b58ORQXhrDTgO3VKLhKFACGqwdMW4iu-0jP25TkuMnixF6wtoMS0QSkO28SPkJ9Jw5gY3HSptBzOAhwyl9X5Ky0lEwWSnC287SWPFnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
      header={"Чистые ручки"}
      maxHeight='80px'
      caption={
        <div
        >
          <p>Секция по боксу в школе №1741, ул. Тимка, к. 11.</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span style={{fontWeight: 900}}>Оценка</span>
            <div>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
            <span>13 отзывов</span>
          </div>
        </div> 
      }
    >
    </ContentCard>,
      <ContentCard 
      style={sectionsCardStyles}
      className="section-card-item"
      image={chess}
      header={"Шахматный клуб 4-х коней"}
      maxHeight='80px'
      caption={
        <div
        >
          <p>Обучайся у лучших шахматистов в Нью-Васюках - столице шахматного мира!</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span style={{fontWeight: 900}}>Оценка</span>
            <div>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
            <span>13 отзывов</span>
          </div>
        </div> 
      }
    >
    </ContentCard>,
    <ContentCard 
      style={sectionsCardStyles}
      className="section-card-item"
      image={basketball}
      header={"Только ВВЕРХ!"}
      maxHeight='80px'
      caption={
        <div
        >
          <p>Обучим баскетболу всех желающих!</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span style={{fontWeight: 900}}>Оценка</span>
            <div>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
              <img src={star}/>
            </div>
            <span>13 отзывов</span>
          </div>
        </div> 
      }
    >
    </ContentCard>,
    
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
    <ContentCard 
      style={newsCardStyles}
      className="section-card-item"
      image={'https://s3-alpha-sig.figma.com/img/9cbd/a850/e2f98b667b30df26869d5394372a6f9f?Expires=1619395200&Signature=a6ArKn6NsVLHx9O7YYLy4muJpLFwoTUINYUl-Z~JW5JEPeNcJERh~DVkcoScChlddtZCqkVK4tjner8wEJvSkV0l3Q36Z6O3ptXDSPfPK5fcN6x9ZhHkWzY25JDIcduUM0dOlXAcb80TnYFLpG36PnaGoJ84g7X7pzjppe0B9ox7amUcBMmTJXsdcc3SJJzcmi30xbjiWp8pfdLvDrsHIdEvnadMjpQsRe5ltLoiQ0Sjf3KWlUfEXFyoYQW12-YgUcuXHLJP5G2CHs0-lh2f4pJQn1wWJ40C56ZG7UmsVVv7zWkUuzZFuDzwggVNw2dLwwaLDLIuLuOr6gV6Fk1NHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
      header={'«Космическая мастерская» в доме культуры «Каравелла»'}
      maxHeight='200px'
      caption={<p>Впервые за последние 3,4 млдр. лет легендарная выставка вернулась в Москву.</p>}
    >
    </ContentCard>,
    <ContentCard 
      style={newsCardStyles}
      className="section-card-item"
      image={'https://s3-alpha-sig.figma.com/img/c27a/775a/39941ad60e5adb4fe43ac54db9d369f7?Expires=1619395200&Signature=bNWKDRbHop53JOxBoiWRcfpLsA-Sf2jhqdSCZy9CBeaz3hYonBDSxNXWv6RNOQXBqMR1yrGvDTLhIiBlxDCQqhF6rwzkRoHvgBX3yfrXZ4mRTEzYz8bmJQnhQ8hKZOg6M4XDOnzZ6g4fc9oJtBpKpbFrfWmNcY6e65fdkrdasvz8h3Qois8uTEPFDbMmIyZg~0Jptt53ZKwUNEVLpgkSn~3PI6w~ndZ1Ey96geOjbCbfBjam~D7TZcgVFSNavJoWpfUXRFS4njVXEyF9CYTNEZGZYP8jkvTn3Zx3t72B9JL3zh3gu-VjEzcae1NQKyqVKQrGz1wTcMzxpGRWuZ19uA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
      header={'«Детская неожиданность» в театре «А–Я»'}
      maxHeight='200px'
      caption={<p>В ближайшие две недели будут проводится незабываемые мастер классы для детей и их родителей.</p>}
    >
    </ContentCard>,
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
    <ContentCard 
      style={updatesCardStyles}
      className="section-card-item"
      //image={reloadIcon}
      header={'Вышла новая версия 1.2.7'}
      maxHeight='200px'
      caption={
        <div>
          <p>Оцените нововведения! <br />Нам важно Ваше мнение.</p>
          <Link>Подробнее</Link>
        </div>
      }
    >
    </ContentCard>,
    <ContentCard 
      style={updatesCardStyles}
      className="section-card-item"
      //image={reloadIcon}
      header={<p>Hot fix 1.2.6e</p>}
      maxHeight='200px'
      caption={
        <div>
          <p>Исправили отображение списка преподавателей</p>
          <Link>Подробнее</Link>
        </div>
      }
    >
    </ContentCard>,
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
          <div style={{display: 'flex', marginBottom: '40px'}}>
            {updatesItems}
          </div>
        </HorizontalScroll>
      </Group>
    </Panel>
  )
}

export default HomePage