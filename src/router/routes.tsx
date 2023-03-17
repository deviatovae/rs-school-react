import React from 'react'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ErrorPage from '../pages/ErrorPage'

export enum Route {
  HOME = '/',
  ABOUT_US = '/about-us',
}

export const routes = [
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Route.HOME,
        element: <Home />,
      },
      {
        path: Route.ABOUT_US,
        element: <AboutUs />,
      },
    ],
  },
]
