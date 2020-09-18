# vkui-popup-button

vkui-popup-button – это React-компонент, позволяющий создавать всплывающие кнопки.

### Установка

`npm i vkui-popup-button`

### Скриншот

![](https://i.ibb.co/x5z1Jzm/2020-09-18-050112.png)

### Пример использования

    <PopupButton
              before={<Icon24Up />}
              onBeforeClick={() => {
                setIsDisplayed(!isDisplayed)
              }}
              after={<Icon24Dismiss />}
              onAfterClick={() => {
                setIsDisplayed(!isDisplayed)
              }}
    		  onClick={() => console.log('Кнопка нажата!')}
              hastabbar
              type="header"
              isVisible={isDisplayed}
            >
              Кнопка
    </PopupButton>

### Описание

`before` - Node, который находитя до children(удобно для иконок)
`onBeforeClick` - клик на ноде before
`after` - компонент после children
`onAfterClick` - событие onClick на компоненте after
`hastabbar` - наличие таббара(нижнего или верхнего) на View
`type` - где будет находится кнопка, один из `['footer', 'header]`
`isVisible` - видимость кнопки(по умолчанию видмимость включена)
