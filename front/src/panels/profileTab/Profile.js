import {
  Icon28AccessibilityOutline,
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
        <div><Icon28BillheadOutline/></div>
        <span>Расписание</span>
      </div>
    </Card>,
    <Card className="manage-card-item">
      <div>
        <div><Icon28DiamondOutline/></div>
        <span>Ачивки</span>
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
