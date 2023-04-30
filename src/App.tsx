import React from 'react'
import { Outlet } from 'react-router-dom'
import './assets/App.scss'
import Header from './components/header/header'

interface AppProps {
  pageTitle?: string
}

function App(props: AppProps) {
  const { pageTitle } = props

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <Outlet />
    </div>
  )
}

export default App
