import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './assets/App.scss'
import { Route } from './router/routes'

function App() {
  const getLinkClass = (isActive: boolean) =>
    `header__link ${isActive ? 'link_active' : ''}`

  return (
    <div>
      <header className="header">
        <div className="header__logo header-logo">
          <img src="src/assets/img/logo1.png" alt="logo" />
          <span className="header-logo__title">BOUGIE</span>
          <h1 className="header-logo__page">Home</h1>
        </div>
        <NavLink
          to={Route.HOME}
          className={({ isActive }) => getLinkClass(isActive)}
        >
          HOME
        </NavLink>
        <NavLink
          to={Route.ABOUT_US}
          className={({ isActive }) => getLinkClass(isActive)}
        >
          ABOUT US
        </NavLink>
      </header>
      <Outlet />
    </div>
  )
}

export default App
