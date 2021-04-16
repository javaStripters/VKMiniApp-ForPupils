import { 
  Button,
  Group, 
  Panel, 
  Placeholder 
} from '@vkontakte/vkui'
import React from 'react'

const Introduction = (props) => {

  return (
    <Panel>
      <div> {/*Тут будет изогнутый блок с картинкой */}

      </div>
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