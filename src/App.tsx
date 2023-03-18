import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import './assets/App.scss'
import Header from './components/header'

interface AppProps {
  pageTitle: string
}

class App extends Component<AppProps> {
  render() {
    const { pageTitle } = this.props

    return (
      <div>
        <Header pageTitle={pageTitle} />
        <Outlet />
      </div>
    )
  }
}

export default App
