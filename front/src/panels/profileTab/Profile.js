import {
  Icon28AccessibilityOutline,
  Icon28AddCircleOutline,
  Icon28BillheadOutline,
  Icon28DiamondOutline,
  Icon28FavoriteOutline,
  Icon28GraphOutline,
  Icon28SettingsOutline,
  Icon28SmileOutline,
} from "@vkontakte/icons";
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
  Avatar,
} from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";

import profileImg from '../../img/Kuzmichev_P.jpg'

const ProfileTab = (props) => {

  const childOptionsCards = [
    <Card className="manage-card-item">
      <div>
        <div><Icon28BillheadOutline/></div>
        <span>Расписание</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28GraphOutline/> </div>
        <span>Успеваемость</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28FavoriteOutline/></div>
        <span>Достижения</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28SmileOutline/></div>
        <span>Преподаватели</span>
      </div>
    </Card>,
  ];


  const [userFullName, setUserFullName] = useState("Иван Иванов");
  const [actualManageCards, setActualManageCards] = useState(childOptionsCards);

  const [infoCard1, setInfoCards] = useState([
    <Card 
      className="info-cards"
      style={{padding: '10px'}}  
    >
      Родители: <br />
      Мама - Приходько Анастасия Дмитриевна <br />
      Отчим - Антонов Дмитрий Сергеевич <br />
      <br />
      <br />
      E-mail: someEmail@mail.ru <br />
      Номер телефона: 8(123)456-78-90
    </Card>,
  ]);
  
  const parentOptionsCards = [
    <Card className="manage-card-item">
      <div>
        <div><Icon28BillheadOutline/></div>
        <span>Расписание</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28SettingsOutline/></div>
        <span>Выбор секции</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28AccessibilityOutline/></div>
        <span>Дети</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28SmileOutline/></div>
        <span>Преподаватели</span>
      </div>
    </Card>,
  ];
  const tutorOptionsCards = [
    <Card className="manage-card-item">
      <div>
        <div><Icon28BillheadOutline/></div>
        <span>Расписание</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28SettingsOutline/></div>
        <span>Отзывы</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28FavoriteOutline/></div>
        <span>Регалии</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28AddCircleOutline/></div>
        <span>Добавить секцию</span>
      </div>
    </Card>,
  ];

  console.log(props);
  useEffect(() => {
    if (props.userInfoFromDB) {
      setUserFullName(
        props.userInfoFromDB.user.firstName +
          " " +
          props.userInfoFromDB.user.lastName
      );

      if (props.userInfoFromDB.type === "Child") {
        setActualManageCards(childOptionsCards);
      } else if (props.userInfoFromDB.type === "Parent") {
        setActualManageCards(parentOptionsCards);
      } else if (props.userInfoFromDB.type === "Tutor") {
        setActualManageCards(tutorOptionsCards);
      }
      else {
        setActualManageCards(childOptionsCards);
      }
    }
  }, []);

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
            after={
              <Button size="m" mode="secondary">
                Редактировать профиль
              </Button>
            }
            before={<Avatar src={profileImg}/>} // Аватарка пользователя через компонент <Avatar />
            description="Поделиться своим профилем" // Эта строка - ссылка
          >
            Кузьмичев Павел Анатольевич
          </SimpleCell>
        </Div>

        <Separator style={{ margin: "8px 0px" }} />

        <div>
          
          <Div className="info-card-container">
            <div>
              <Header mode="secondary">Контактная информация</Header>
              <div>{infoCard1}</div>
            </div>
          </Div>

          <div>
            <Header style={{ marginLeft: 0, paddingLeft: 0 }} mode="secondary">
              Действия
            </Header>
            <Div className="manage-card-container">
              {actualManageCards}
              {/* 
                Сюда карточки взависимости от роли опльзователя 
              */}
            </Div>
          </div>
        </div>
      </Group>
    </Panel>
  );
};

export default ProfileTab;
