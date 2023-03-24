import './notification.scss'
import React, { Component } from 'react'
import { Icon } from '@iconify/react'

interface NotificationProps {
  show: boolean | null
}
export default class Notification extends Component<NotificationProps> {
  getToastShowClass(): string {
    const { show } = this.props

    if (show === null) {
      return ''
    }

    return show ? 'show' : 'hide'
  }

  render() {
    return (
      <div className={`toast ${this.getToastShowClass()}`}>
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
