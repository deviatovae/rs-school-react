import './notification.scss'
import React from 'react'
import { Icon } from '@iconify/react'

interface NotificationProps {
  show: boolean | null
}

export function Notification({ show }: NotificationProps) {
  const getToastShowClass = () => {
    if (show === null) {
      return ''
    }

    return show ? 'show' : 'hide'
  }

  return (
    <div className={`toast ${getToastShowClass()}`}>
      <div className="toast__content">
        <div className="toast__message">
          <Icon icon="octicon:info-24" color="#a785b2" width="24" height="24" />
          <span>Your profile card has been created!</span>
        </div>
      </div>
    </div>
  )
}
