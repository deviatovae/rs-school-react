import React from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from '../../enums/route'

interface HeaderProps {
  pageTitle: string
}

const getLinkClass = (isActive: boolean) =>
  `header__link ${isActive ? 'link_active' : ''}`

export default function Header({ pageTitle }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__logo header-logo">
        <img src="/img/logo1.png" alt="logo" />
        <span className="header-logo__title">BOUGIE</span>
        <h1 className="header-logo__page">{pageTitle}</h1>
      </div>
      <NavLink
        to={Route.HOME}
        className={({ isActive }) => getLinkClass(isActive)}
      >
        HOME
      </NavLink>
      <NavLink
        to={Route.JOIN}
        className={({ isActive }) => getLinkClass(isActive)}
      >
        JOIN
      </NavLink>
      <NavLink
        to={Route.ABOUT_US}
        className={({ isActive }) => getLinkClass(isActive)}
      >
        ABOUT US
      </NavLink>
    </header>
  )
}
