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
  Avatar,
} from "@vkontakte/vkui";
import { Icon28AddOutline, Icon28Menu } from "@vkontakte/icons";

import star from '../../img/star.svg'
import basketball from '../../img/basketball.jpg'
import chess from '../../img/chess.jpg'

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
            <ContentCard 
              className="section-card-item"
              image={'https://s3-alpha-sig.figma.com/img/97c4/323c/d5d5dbdffc90077f69b02511b531aca5?Expires=1619395200&Signature=U~aZMLLRhlpA8GwWAKPfuu5NFpLXIg7HJjcgu7maNbyYqlHo7NlEnOwf4PFzNaLTSN7BDMhIl9IeL5TZ0ihq4ChLMyKOkoRD0iWidC7Ju6~z6W26fgU6wxUYCX5ISiFPPri538clE38ydA39zPFHAiRztKO-PS2lxOhIsw4McPCJKko0yqB-4tpKrbgUEUdGdSwLvTImz0w6e6DpeqgZdNm152HRVe6yucIYZgxnLrFuZB9b58ORQXhrDTgO3VKLhKFACGqwdMW4iu-0jP25TkuMnixF6wtoMS0QSkO28SPkJ9Jw5gY3HSptBzOAhwyl9X5Ky0lEwWSnC287SWPFnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              header={"Чистые ручки"}
              maxHeight='80px'
              caption={
                <div
                >
                  <p>Секция по боксу в школе №1741, ул. Тимка, к. 11.
                  </p>
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
            </ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard 
              className="section-card-item"
              image={chess}
              header={"Шахматный клуб 4-х коней"}
              maxHeight='80px'
              caption={
                <div
                >
                  <p>Обучайся у лучших в Нью-Васюках - столице шахматного мира!</p>
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
            </ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section">
            <ContentCard 
              className="section-card-item"
              style={{height: '120%'}}
              image={basketball}
              header={"Только ВВЕРХ!"}
              maxHeight='80px'
              caption={
                <div
                >
                  <p>Обучим баскетболу всех желающих! <br /> </p>
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
            </ContentCard>
          </Card>
          <Card 
            className="section-card-item"
            onClick={props.openNewTabPanel}
            data-to="section1">
            <ContentCard 
              className="section-card-item"
              image={'https://s3-alpha-sig.figma.com/img/8911/30a6/7dd9917d3d63ff2b5a7e04d330333b9d?Expires=1619395200&Signature=dG2FBJA8ZfmYshzZZLMpGaBHB3psi~LXhtlJnNgngG5DPybpZVrBVNFROak8G3-aVuQ0ViD4QtyfApndLyTZ74-1ZbqbaUs0PXJAkhEdKGOQJfN~VN5Pn5l4bRWsHQpYDeIRUcJeC0I~ZcZ~0eOOptUTfJzPZuOXyXAnqijtyRqUmkABRfBb06-85uCJ5v16fUoRco5yuh~o0MN55i4mqSUXdnjAFXuF3Spu7mnFRSWY3MGgfLH7R2C8iLhv3dxk23cfLkFMXT3~1lnan1N60jkrt2ImQJ9mQ2rwDq65L6LmcILE1RFRBXzVfCd0uERif3Hxj4eeqItfeg1CEUgJig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              header={"Хоккейная школа «КРЫЛЬЯ»"}
              maxHeight='80px'
              caption={
                <div
                >
                  <p>У нас работают лучшие специалисты!</p>
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
            </ContentCard>
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
