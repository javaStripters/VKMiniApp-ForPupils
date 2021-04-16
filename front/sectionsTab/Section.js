import { Icon24LogoInstagram, Icon24LogoVk, Icon28LogoInstagram, Icon28LogoVkOutline, Icon32LogoVk, Icon36LogoVk } from '@vkontakte/icons'
import { 
  ContentCard, 
  Card,
  Div, 
  Header, 
  Panel, 
  PanelHeader, 
  PanelHeaderBack, 
  Text,
  Button,
  IconButton,
} from '@vkontakte/vkui'
import React, {useState} from 'react'

const Section = (props) => { 

  const [sectionName, setSectionName] = useState('Test name')
  const [teacherName, setTeacherName] = useState('Test name')
  const [sectionAddress, setSectionAddress] = useState ('Test: city, street, house number') 
  const [phoneNumber, setPhoneNumber] = useState('8(920)877-93-73')
  const [emailAddress, setEmailAddress] = useState('zarbin2001@mail.ru')
  const [sectionDescription, setSectionDescription] = useState(
    'Детская хоккейная школа, которая работает в центре ледовой подготовки «AT HOCKEY», предлагает групповые и индивидуальные тренировки для юных хоккеистов с любым уровнем подготовки. Занятия в нашей центре ориентированы на спортсменов, которые имеют навыки катания на коньках и владеют клюшкой. Тренировки по хоккею для детей в нашей школе – это прекрасная возможность отработать уже полученные навыки и увеличить время тренировок за счет подкаток. Мы рады всем без исключения в нашей секции хоккея для детей и готовы принять в ряды воспитанников всех желающих.'
  )
  const [socialWebs, setSocialWebs] = useState({
    isVkGroup: true,
    isInstargam: true,
  })

  return (
    
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderBack
            onClick={props.go}
            data-to="sections"
          >

          </PanelHeaderBack>
        }
        align="center"
      >
        Секции
      </PanelHeader>

      <Div 
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(2, auto)',
        }}
      >
        <Div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)',
          columnGap: '20px',
          gridTemplateRows: '1fr'
        }}>
          <Card style={{
            minHeight: '100px',
            maxHeight: '200px',
            maxWidth: '300px',
            //justifySelf: 'center'
            }}
          ></Card>
          <div 
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, auto)) 20px',
              rowGap: '10px',
            }}
          >
            <h1>{sectionName}</h1>
            <Text>{teacherName}</Text>
            <Text>{sectionAddress}</Text>
            <div>
              <Text>Телефон: {phoneNumber}</Text>
              <Text>E-mail: {emailAddress}</Text>
            </div>
          </div>
        </Div>
        <Div
          style={{
            display: 'grid',
            textAlign: 'justify'
          }}
        >
          {sectionDescription}
        </Div>
        <Div
          style={{ 
            display: 'grid',
            gridTemplateRows: 'repeat(2, auto)',
            rowGap: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button mode="secondary" size='l'>Оплатить</Button>
          </div>
          <div
            style={{ 
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {socialWebs.isVkGroup && <IconButton><Icon28LogoVkOutline></Icon28LogoVkOutline></IconButton>}
              {socialWebs.isInstargam && <IconButton><Icon28LogoInstagram></Icon28LogoInstagram></IconButton>}
            </div>
            <div>
              <Button mode="primary" size='l'>Записаться</Button>
            </div>
          </div>
        </Div>
      </Div>
    </Panel>
  )
}

export default Section