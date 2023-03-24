import './notification.scss'
import React, { Component } from 'react'
import { Icon } from '@iconify/react'

interface NotificationProps {
  show: boolean
}
export default class Notification extends Component<NotificationProps> {
  render() {
    const { show } = this.props
    const showAlert = show ? 'show' : 'hide'
    return (
      <div className={`toast ${showAlert}`}>
        <div className="toast__content">
          <div className="toast__message">
            <Icon
              icon="octicon:info-24"
              color="#a785b2"
              width="24"
              height="24"
            />
            <span>Your profile card has been created!</span>
          </div>
        </div>
      </div>
    )
  }
}
