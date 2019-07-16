import React from 'react'
import { Button, IS_PLATFORM_IOS } from '@vkontakte/vkui'
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss'
import './PopupButton.css'
import '@vkontakte/vkui/dist/vkui.css'

class PopupButton extends React.Component {
  state = { isVisible: false }

  static defaultProps = {
    level: 'primary',
    type: 'footer'
  }

  onClick = () => {
    const { onClick } = this.props
  }

  onDismissClick = () => {
    this.setState({ isVisible: false })
  }

  getPopupButtonClassNames = () => {
    const { isVisible } = this.state
    const { hastabbar, type } = this.props

    const classes = `${isVisible ? 'Show' : 'Hide'}${hastabbar ? 'WithTabbar' : ''}${
      type === 'header' ? 'FromHeader' : ''
    }${IS_PLATFORM_IOS ? 'IOS' : ''}`

    return classes
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    const { isVisible } = this.state
    const { className, children, level, removable, before, onBeforeClick } = this.props

    return (
      <div className={`PopupButton ${this.getPopupButtonClassNames()}`}>
        <Button
          level={level}
          onClick={this.onClick}
          before={
            <div
              style={{ marginLeft: -11, marginRight: -4 }}
              onClick={() => {
                onBeforeClick()
                this.onDismissClick()
              }}
            >
              {before}
            </div>
          }
          after={
            removable ? (
              <div style={{ marginRight: -15 }} onClick={this.onDismissClick}>
                <Icon24Dismiss />
              </div>
            ) : null
          }
        >
          {children}
        </Button>
      </div>
    )
  }
}

export default PopupButton
