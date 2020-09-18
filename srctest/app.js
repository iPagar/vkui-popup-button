import React, { useState } from 'react'
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
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss'

const ParentWrapper = () => {
  const [isDisplayed, setIsDisplayed] = useState(true)

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
          onClick={() => console.log('Кнопка нажата!')}
          onBeforeClick={() => {
            setIsDisplayed(!isDisplayed)
          }}
          after={<Icon24Dismiss />}
          onAfterClick={() => {
            setIsDisplayed(!isDisplayed)
          }}
          hastabbar
          type="header"
          isVisible={isDisplayed}
        >
          Кнопка
        </PopupButton>
      </Panel>
    </View>
  )
}

ReactDOM.render(<ParentWrapper />, document.getElementById('root'))
