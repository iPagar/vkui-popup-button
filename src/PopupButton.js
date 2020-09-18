import React from 'react'
import { Button, IS_PLATFORM_IOS } from '@vkontakte/vkui'
import './PopupButton.css'
import '@vkontakte/vkui/dist/vkui.css'

class PopupButton extends React.Component {
	state = { isVisible: false }

	static defaultProps = {
		level: 'primary',
		type: 'footer'
	}

	getPopupButtonClassNames = () => {
		const { isVisible } = this.props
		const { hastabbar, type } = this.props

		const classes = `${isVisible ? 'Show' : 'Hide'}${hastabbar ? 'WithTabbar' : ''}${
			type === 'header' ? 'FromHeader' : ''
		}${IS_PLATFORM_IOS ? 'IOS' : ''}`

		return classes
	}

	render() {
		const {
			className,
			children,
			level,
			isVisible,
			before,
			onBeforeClick,
			onClick,
			after,
			onAfterClick
		} = this.props

		return (
			<div className={`PopupButton ${this.getPopupButtonClassNames()}`}>
				<Button
					level={level}
					before={
						before ? (
							<div style={{ marginLeft: -11, marginRight: -4 }} onClick={onBeforeClick}>
								{before}
							</div>
						) : null
					}
					after={
						after ? (
							<div style={{ marginRight: -15 }} onClick={onAfterClick}>
								{after}
							</div>
						) : null
					}
				>
					<div onClick={onClick}>{children}</div>
				</Button>
			</div>
		)
	}
}

export default PopupButton
