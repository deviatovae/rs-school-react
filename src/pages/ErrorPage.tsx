import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/ErrorPage.scss'
import { Route } from '../enums/route'

export default function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-page__container">
        <h1>404</h1>
        <h3>OOPS! The page isn't found.</h3>
        <p>
          Go back to <NavLink to={Route.HOME}>Home page</NavLink>
        </p>
      </div>
    </div>
  )
}
