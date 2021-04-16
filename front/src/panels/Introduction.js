import { 
  Button,
  Group, 
  Panel, 
  Placeholder 
} from '@vkontakte/vkui'
import React from 'react'
// import IntroductionImage from './Introduction-image.svg'

const Introduction = (props) => {

  return (
    <Panel> 
      <div class="curved-block-before"></div>
        {/* <img class="introduction-image" href={require('./Introduction-image.svg')} /> */}
      <div class="curved-block"></div>
      {/* <img class="introduction-image" src={IntroductionImage} width="400" height="400"/> */}

      <Placeholder
        header='Вступление'
        action={
          <Button 
            style={{width: '300px'}}
            onClick={props.openNewTab}
            data-to="chooseRole"
            size='l'
          >
            Начать!
          </Button>
        }
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </Placeholder>
    </Panel>
  )
}

export default Introduction