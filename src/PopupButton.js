import React from 'react'
import { Button, getClassName } from '@vkontakte/vkui'
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss'
import './PopupButton.css'
import '@vkontakte/vkui/dist/vkui.css'

class PopupButton extends React.Component {
  state = { isVisible: false }

  static defaultProps = {
    level: 'primary'
  }

  onClick = () => {
    const { onClick } = this.props
  }

  onDismissClick = () => {
    this.setState({ isVisible: false })
  }

  getPopupButtonClassNames = () => {
    const { isVisible } = this.state
    const { hastabbar } = this.props

    const classes = isVisible
      ? `Show${hastabbar ? 'WithTabbar' : ''}`
      : `Hide${hastabbar ? 'WithTabbar' : ''}`

    return classes
  }

  componentDidMount() {
    this.setState({ isVisible: true })
  }

  render() {
    const { isVisible } = this.state
    const { className, children, level, ...restProps } = this.props

    return (
      <div className={`PopupButton ${this.getPopupButtonClassNames()}`}>
        <Button
          {...restProps}
          level={level}
          onClick={this.onClick}
          after={
            <div onClick={this.onDismissClick}>
              <Icon24Dismiss />
            </div>
          }
        >
          {children}
        </Button>
      </div>
    )
  }
}

export default PopupButton
