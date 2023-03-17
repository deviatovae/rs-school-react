import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from '../router/routes'
import '../assets/ErrorPage.scss'

export default class ErrorPage extends Component {
  render() {
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
}
