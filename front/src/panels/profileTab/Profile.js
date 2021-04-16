import {
  Icon28AddCircleOutline,
  Icon28BillheadOutline,
  Icon28DiamondOutline,
  Icon28FavoriteOutline,
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
} from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";

const ProfileTab = (props) => {
  const [userFullName, setUserFullName] = useState("Иван Иванов");
  const [actualManageCards, setActualManageCards] = useState([]);

  const [infoCard1, setInfoCards] = useState([
    <Card className="info-cards"></Card>,
  ]);

  const [infoCard2, setInfoCard2] = useState([
    <Card className="info-cards"></Card>,
  ]);

  const childOptionsCards = [
    <Card className="manage-card-item">
      <div>
        <div><Icon28BillheadOutline></Icon28BillheadOutline></div>
        <span>Расписание</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <Icon28DiamondOutline></Icon28DiamondOutline>
      Ачивки
    </Card>,
    <Card className="manage-card-item">
      <Icon28FavoriteOutline></Icon28FavoriteOutline>
      Достижения
    </Card>,
    <Card className="manage-card-item">
      <Icon28SmileOutline></Icon28SmileOutline>
      Преподаватели
    </Card>,
  ];
  const parentOptionsCards = [
    <Card className="manage-card-item">
      <Icon28BillheadOutline></Icon28BillheadOutline>
      Расписание
    </Card>,
    <Card className="manage-card-item">Выбор секции</Card>,
    <Card className="manage-card-item">Дети</Card>,
    <Card className="manage-card-item">
      <Icon28SmileOutline></Icon28SmileOutline>
      Преподаватели
    </Card>,
  ];
  const tutorOptionsCards = [
    <Card className="manage-card-item">
      <Icon28BillheadOutline></Icon28BillheadOutline>
      Расписание
    </Card>,
    <Card className="manage-card-item">
      <Icon28SettingsOutline></Icon28SettingsOutline>
      Отзывы
    </Card>,
    <Card className="manage-card-item">
      <Icon28FavoriteOutline></Icon28FavoriteOutline>
      Регалии
    </Card>,
    <Card className="manage-card-item">
      <Icon28AddCircleOutline></Icon28AddCircleOutline>
      Добавить секцию
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
            before="Avatar" // Аватарка пользователя через компонент <Avatar />
            description="Поделиться своим профилем" // Эта строка - ссылка
          >
            {userFullName}
          </SimpleCell>
        </Div>

        <Separator style={{ margin: "8px 0px" }} />

        <div>
          
          <Div className="info-card-container">
            <div>
              <Header mode="secondary">Контактная информация</Header>
              <div>{infoCard1}</div>
            </div>

            <div>
              <Header mode="secondary">О себе</Header>
              <div>{infoCard2}</div>
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
