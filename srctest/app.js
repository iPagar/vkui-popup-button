import React from 'react'
import ReactDOM from 'react-dom'
import {
  View,
  Panel,
  PanelHeader,
  FixedLayout,
  Tabs,
  TabsItem,
  HorizontalScroll
} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import Icon24Up from '@vkontakte/icons/dist/24/up'
import PopupButton from '../src/PopupButton.js'

const ParentWrapper = () => {
  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>Panel Header</PanelHeader>
        <FixedLayout vertical="top">
          <Tabs theme="header" type="buttons">
            <HorizontalScroll>
              <TabsItem selected>Все</TabsItem>
              <TabsItem>Люди</TabsItem>
              <TabsItem>Сообщества</TabsItem>
            </HorizontalScroll>
          </Tabs>
        </FixedLayout>
        <PopupButton
          before={<Icon24Up />}
          onBeforeClick={() => console.log('Before clicked!')}
          removable
        >
          Кнопка
        </PopupButton>
      </Panel>
    </View>
  )
}

ReactDOM.render(<ParentWrapper />, document.getElementById('root'))
