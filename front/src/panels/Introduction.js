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
      <div class="curved-block-before"></div>
        {/* <img class="introduction-image" href={require('./Introduction-image.svg')} /> */}
      <div className="curved-block"></div>
      <div className='welcome-page-image-container'>
        <img 
          className="introduction-image" 
          src='https://s3-alpha-sig.figma.com/img/08d1/fb8c/c5c2c6bae132b278ddcc5ffbc5a866e2?Expires=1619395200&Signature=UQ~G9qTn7sHlDVWlSX23dj7sZEKPWVsxtMfk61LgBiesL9NmuTFQy4pfnpq3-2eDLMlgDvQpt6reyORl~5IFuKYrzoP6qY~qRQxVaf7QfkY53luhxWo~H5QOPYEcTCE72mxaqc6a7iMuHy42L8oNNSXPHXGMniD77Ucr7g2u~Orl0OWWUPVvlcmNm~hhFpJyWiFBJ2EslSShaOFosRTrcbabJrrgUOp5bLOTPv1Ub~ppKYXPwrBpTI98NVUAJ0C1dNKu0wA8L46eQCvlxFtZTPu6DZdTz5sZ-QZVBxpztpBF08Fx--WmNGMm9EBNfT9r~kDRJO9cMnGbyRULnk1x8Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
          width="300" /> 
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