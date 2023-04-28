import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStaticHandler } from 'react-router-dom/server'
import router from './router/router'
import { setupStore } from './store/store'

const preloadedState = window.__PRELOADED_STATE__
const store = setupStore(preloadedState)

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store} serverState={preloadedState}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
