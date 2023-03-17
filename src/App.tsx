import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './assets/App.scss'
import { Route } from './router/routes'

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo header-logo">
          <img src="src/assets/img/logo1.png" alt="logo" />
          <span>BOUGIE</span>
        </div>
        <NavLink to={Route.HOME} className="header__link">
          HOME
        </NavLink>
        <NavLink to={Route.ABOUT_US} className="header__link">
          ABOUT US
        </NavLink>
      </header>
      <Outlet />
    </div>
  )
}

export default App
