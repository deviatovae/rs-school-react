import React, { ReactNode } from 'react'
import { LoaderImg } from './loaderImg'

interface LoaderProps {
  isLoading?: boolean
  children?: ReactNode
}

export function Loader({ children, isLoading }: LoaderProps) {
  if (isLoading || isLoading === undefined) {
    return <LoaderImg />
  }
  return <div>{children}</div>
}
