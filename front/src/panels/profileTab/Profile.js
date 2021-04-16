import { 
  ContentCard, 
  Div, 
  Separator, 
  CardGrid, 
  Card, 
  Button, 
  Panel, 
  PanelHeader, 
  SimpleCell, 
  Group, 
  Header, 
  Icon28FavoriteOutline,
  Icon28BillheadOutline,
  Icon28SettingsOutline, 
  Icon28SmileOutline
} from '@vkontakte/vkui'
import React, {useState} from 'react'

const ProfileTab = (props) => {
  const manageCardsStyles = {
    minWidth: '337px',
    height: '96px',
    margin: '10px',
    padding: '0px',
  }

  const [infoCard1, setInfoCards] = useState([
    <Card className='info-cards'></Card>,
  ])

  const [infoCard2, setInfoCard2] = useState([
    <Card className='info-cards'></Card>,
  ])

  const [manageCards, setManageCards] = useState([
    <Card className='manage-card-item'>{/*<Icon28BillheadOutline></Icon28BillheadOutline>*/}Расписание</Card>,
    <Card className='manage-card-item'>Выбор секции</Card>,
    <Card className='manage-card-item'>{/*<Icon28FavoriteOutline></Icon28FavoriteOutline>*/}Достижения</Card>,
    <Card className='manage-card-item'>{/*<Icon28SmileOutline></Icon28SmileOutline>*/}Преподаватели</Card>,
    // <ContentCard text="Выбор секции">2</ContentCard>,
    // <ContentCard style={manageCardsStyles} text="Достижения">3</ContentCard>,
    // <ContentCard style={manageCardsStyles} text="Преподаватели">4</ContentCard>,
  ])

  return (
    <Panel>
      <PanelHeader>Это мой профиль</PanelHeader>
      <Group>
        {/* <Header mode="secondary"></Header> */}
        {/* <Div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <RichCell
            before="Avatar" // Аватарка пользователя через компонент <Avatar />
          >
            {userName}
          </RichCell>
          <Button mode='secondary' size='m' >Редактировать профиль</Button>
        </Div> */}
        <Div>
          <SimpleCell
            disabled
            after={<Button size="m" mode="secondary">Редактировать профиль</Button>}
            before="Avatar" // Аватарка пользователя через компонент <Avatar />
            description="Поделиться своим профилем" // Эта строка - ссылка
          >
            Данил Даньшин
          </SimpleCell>
        </Div>

        <Separator style={{ margin: '8px 0px' }} />

        <div>

          <Div className='info-card-container'>
            <div>
              <Header mode="secondary">Контактная информация</Header>
              <div>{infoCard1}</div>
            </div>

            <div>
              <Header mode='secondary'>О себе</Header>
              <div>{infoCard2}</div>
            </div>
          </Div>


          
          <div>
            <Header style={{marginLeft: 0, paddingLeft: 0}} mode='secondary'>Действия</Header>
            <Div className='manage-card-container'>
              {manageCards}
            </Div>
          </div>

        </div>
      </Group>
    </Panel>
  )
}

export default ProfileTab