import React, { ReactNode, useRef } from 'react'
import { Icon } from '@iconify/react'
import './modal.scss'
import { useModalHandler } from './useModalHandler'

interface ModalProps {
  children: ReactNode
  closeModal: () => void
}

export function Modal({ children, closeModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  useModalHandler({ elementRef: modalRef, onClose: closeModal })

  return (
    <div className="modal" ref={modalRef} data-testid="modal">
      <div className="modal__content">
        <Icon
          onClick={closeModal}
          className="modal__close-btn"
          icon="carbon:close"
          color="#fff"
          width="36"
          height="36"
        />
        <div>{children}</div>
      </div>
    </div>
  )
}
