import React from 'react'
import {
  Panel,
  Group, 
  Placeholder, 
  Div,
  Button 
} from '@vkontakte/vkui';

const ChooseRole = (props) => {

  return(
  <Panel>
      <div class="curved-block-before"></div>
      <div class="curved-block"></div>
      <div className='welcome-page-image-container'>
        <img 
          className="introduction-image" 
          src='https://s3-alpha-sig.figma.com/img/9900/3e14/263cd0d3a545e718d2f54b153ff53923?Expires=1619395200&Signature=K93mx2Pa5sDzBlpZIKVGiqk1xieRn7~7vLntnvqRmszBUspeSO8RrhcK55nER4e09oy7uUYAo3AqxEZCiAx2ICI8IDnYIaiOaTJc6iGNQGW~cPB8wHftkQkv-OjsmFCJwWtvGKFWHourIosiA3r7VuVm8LFgaU~15eRtI0ouGWdW8BT0ZFHPFIgLAsoW8AGFtvpdGiFNDSjtN9pt-uqcH9LhSMorMmShd--BbGR5pXRvVQCzoeGamzg-plvx7pl4oEwPKd9ViaqCVImq9ouov-4B-Z0DnM8Z1Y9aTpiawKlsgqUyJupvtJ7913r2VG4mjm3mCcU4a3Kgg4oV1BSLZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
          width="280" /> 
      </div>
      <Group>
        <Placeholder
          //icon={<Icon56UsersOutline />}
          header={<p>Выберите свою роль</p>}
        >
          
        </Placeholder>
        <Group>
          <Div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 300px auto',
              gridTemplateRows: 'auto',
              rowGap: '15px'
            }}
          >
            <Button 
              style={{ gridColumn: '2/3' }}
              stretched
              mode="secondary"
              size="m"
              onClick={props.go} 
              data-to="appbar"
            >
              Ученик
            </Button>
            <Button 
              style={{ gridColumn: '2/3' }}
              stretched
              mode="secondary" 
              size="m"
              onClick={props.go} 
              data-to="appbar"
            >
              Родитель
            </Button>
            <Button 
              style={{ gridColumn: '2/3' }}
              stretched
              mode="secondary" 
              size="m"
              onClick={props.go} 
              data-to="regTeacher"
            >
              Преподаватель
            </Button>
          </Div>
        </Group>
      </Group>
  </Panel>
  )
}

export default ChooseRole