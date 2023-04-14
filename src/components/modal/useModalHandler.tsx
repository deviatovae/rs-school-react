import { RefObject, useEffect } from 'react'

interface UseModalHandlerProps {
  elementRef: RefObject<HTMLElement>
  onClose: () => void
}

export function useModalHandler({ elementRef, onClose }: UseModalHandlerProps) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        elementRef.current &&
        (!elementRef.current.contains(e.target as HTMLElement) ||
          elementRef.current === e.target)
      ) {
        return onClose()
      }
      return null
    }

    const onKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKeyDown)
    }
  })
}
