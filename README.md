# vkui-popup-button

vkui-popup-button – это React-компонент, позволяющий создавать всплывающие кнопки.

## Установка

`npm i vkui-popup-button`

## Пример использования

```jsx static
import React from 'react'
import ReactDOM from 'react-dom'
import { View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui'
import PopupButon from 'vkui-popup-button'
import '@vkontakte/vkui/dist/vkui.css'

function App() {
	return (
		<View activePanel="main">
			<Panel id="main">
				<PanelHeader>VKUI</PanelHeader>
				<Group title="Items">
					<List>
						<Cell>Hello</Cell>
						<Cell>World</Cell>
					</List>
				</Group>
				<PopupButton onClick={() => console.log('На меня нажали')}>Нажми на меня!</PopupButton>
			</Panel>
		</View>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
```
