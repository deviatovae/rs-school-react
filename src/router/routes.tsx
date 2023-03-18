import React from 'react'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import ErrorPage from '../pages/ErrorPage'
import { Route } from '../enums/route'

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
