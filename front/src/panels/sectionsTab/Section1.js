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

const Section1 = (props) => { 

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
          <div
            style={{
              minHeight: '100px',
              maxHeight: '200px',
              maxWidth: '300px',
              overflow: 'hidden',
              borderRadius: '10px',
              background: 'no-repeat center/cover url(https://s3-alpha-sig.figma.com/img/8911/30a6/7dd9917d3d63ff2b5a7e04d330333b9d?Expires=1619395200&Signature=dG2FBJA8ZfmYshzZZLMpGaBHB3psi~LXhtlJnNgngG5DPybpZVrBVNFROak8G3-aVuQ0ViD4QtyfApndLyTZ74-1ZbqbaUs0PXJAkhEdKGOQJfN~VN5Pn5l4bRWsHQpYDeIRUcJeC0I~ZcZ~0eOOptUTfJzPZuOXyXAnqijtyRqUmkABRfBb06-85uCJ5v16fUoRco5yuh~o0MN55i4mqSUXdnjAFXuF3Spu7mnFRSWY3MGgfLH7R2C8iLhv3dxk23cfLkFMXT3~1lnan1N60jkrt2ImQJ9mQ2rwDq65L6LmcILE1RFRBXzVfCd0uERif3Hxj4eeqItfeg1CEUgJig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'
            }}
          >
            {/*
            <img 
              style={{width: '100%'}}
              src='https://s3-alpha-sig.figma.com/img/8911/30a6/7dd9917d3d63ff2b5a7e04d330333b9d?Expires=1619395200&Signature=dG2FBJA8ZfmYshzZZLMpGaBHB3psi~LXhtlJnNgngG5DPybpZVrBVNFROak8G3-aVuQ0ViD4QtyfApndLyTZ74-1ZbqbaUs0PXJAkhEdKGOQJfN~VN5Pn5l4bRWsHQpYDeIRUcJeC0I~ZcZ~0eOOptUTfJzPZuOXyXAnqijtyRqUmkABRfBb06-85uCJ5v16fUoRco5yuh~o0MN55i4mqSUXdnjAFXuF3Spu7mnFRSWY3MGgfLH7R2C8iLhv3dxk23cfLkFMXT3~1lnan1N60jkrt2ImQJ9mQ2rwDq65L6LmcILE1RFRBXzVfCd0uERif3Hxj4eeqItfeg1CEUgJig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
            ></img>
            */}
          </div>

            {/*
            <ContentCard 
              image='https://s3-alpha-sig.figma.com/img/8911/30a6/7dd9917d3d63ff2b5a7e04d330333b9d?Expires=1619395200&Signature=dG2FBJA8ZfmYshzZZLMpGaBHB3psi~LXhtlJnNgngG5DPybpZVrBVNFROak8G3-aVuQ0ViD4QtyfApndLyTZ74-1ZbqbaUs0PXJAkhEdKGOQJfN~VN5Pn5l4bRWsHQpYDeIRUcJeC0I~ZcZ~0eOOptUTfJzPZuOXyXAnqijtyRqUmkABRfBb06-85uCJ5v16fUoRco5yuh~o0MN55i4mqSUXdnjAFXuF3Spu7mnFRSWY3MGgfLH7R2C8iLhv3dxk23cfLkFMXT3~1lnan1N60jkrt2ImQJ9mQ2rwDq65L6LmcILE1RFRBXzVfCd0uERif3Hxj4eeqItfeg1CEUgJig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              maxHeight='150px'
              //style={{height: '150px'}}
            ></ContentCard>
            */}
          
          <div 
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, auto)) 20px',
              rowGap: '10px',
            }}
          >
            <h1>Детская хоккейная школа «КРЫЛЬЯ»</h1>
            <Text>Коньков Иван Сергеевич</Text>
            <Text>Город Москва <br /> Ул. Мышкина, д1, к.5 </Text>
            <div>
              <Text>Контакты : 8 (999) - 000 - 00 - 00</Text>
              <Text>E-mail : konivan@gmail.com</Text>
            </div>
          </div>
        </Div>
        <Div
          style={{
            display: 'grid',
            textAlign: 'justify'
          }}
        >
          Детская хоккейная школа, которая работает в центре ледовой подготовки «КРЫЛЬЯ», предлагает групповые и индивидуальные тренировки для юных хоккеистов с любым уровнем подготовки. Занятия в нашей центре ориентированы на спортсменов, которые имеют навыки катания на коньках и владеют клюшкой. Тренировки по хоккею для детей в нашей школе – это прекрасная возможность отработать уже полученные навыки и увеличить время тренировок за счет подкаток. Мы рады всем без исключения в нашей секции хоккея для детей и готовы принять в ряды воспитанников всех желающих.
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
              <Button 
                mode="primary" 
                size='l'
                onClick={props.go}
                data-to='regChild'
              >Записаться</Button>
            </div>
          </div>
        </Div>
      </Div>
    </Panel>
  )
}

export default Section1