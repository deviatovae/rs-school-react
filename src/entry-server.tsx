import React from 'react'
import {
  renderToPipeableStream,
  RenderToPipeableStreamOptions,
} from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticHandlerContext,
  StaticRouterProvider,
} from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { Request as Req } from 'express'
import { setupStore } from './store/store'
import { routes } from './router/routes'

const store = setupStore({})

export const render = async (
  req: Req,
  url: string,
  options: RenderToPipeableStreamOptions
) => {
  const reqUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  const { query, dataRoutes } = createStaticHandler(routes)
  const fetchRequest = new Request(reqUrl)
  const context = (await query(fetchRequest)) as StaticHandlerContext
  const router = createStaticRouter(dataRoutes, context)

  const { pipe } = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouterProvider router={router} context={context} />
    </Provider>,
    options
  )

  return { pipe, store }
}
