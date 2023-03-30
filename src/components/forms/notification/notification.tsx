import './notification.scss'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

interface NotificationProps {
  onHide: () => void
}

export function Notification({ onHide }: NotificationProps) {
  const [isHiding, setIsHiding] = useState(false)
  const timeout = 3000

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsHiding(true), timeout)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (isHiding) {
      const timeoutId = setTimeout(onHide, timeout * 2)

      return () => {
        clearTimeout(timeoutId)
      }
    }
    return undefined
  }, [isHiding, onHide])

  const getToastShowClass = () => (isHiding ? 'hide' : 'show')

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
