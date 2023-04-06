import React from 'react'
import { Home } from '../pages/Home'
import { AboutUs } from '../pages/AboutUs'
import { Route } from '../enums/route'
import App from '../App'
import ErrorPage from '../pages/ErrorPage'
import { FormPage } from '../pages/FormPage'

export const routes = [
  {
    element: <App pageTitle="HOME" />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Route.HOME,
        element: <Home />,
      },
    ],
  },
  {
    element: <App pageTitle="ABOUT US" />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Route.ABOUT_US,
        element: <AboutUs />,
      },
    ],
  },
  {
    element: <App pageTitle="JOIN" />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Route.JOIN,
        element: <FormPage />,
      },
    ],
  },
]
