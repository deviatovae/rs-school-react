import React from 'react'
import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import App from './App'
import { setupStore } from './store/store'

const store = setupStore({})

export const render = async (
  url: string,
  options: RenderToPipeableStreamOptions
) => {
  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  )

  return { pipe, store }
}
