import express, { NextFunction, Request, Response } from 'express'
import { createServer as createViteServer } from 'vite'
import { fileURLToPath } from 'node:url'
import fs from 'fs'
import path from 'path'
import { render as renderFn } from './entry-server'

const currentDir = path.dirname(fileURLToPath(import.meta.url))
const htmlDir = path.join(currentDir, '..')

type EntryServer = {
  render: typeof renderFn
}

const PLACEHOLDER_SSR = '<!--ssr-->'
const PLACEHOLDER_PRELOADED_STATE = '<!--preloadedState-->'

const PATH_ENTRY_SERVER = '/src/entry-server.tsx'
const PATH_ENTRY_CLIENT = './entry-client.tsx'

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(htmlDir, 'index.html'),
        'utf-8'
      )

      template = await vite.transformIndexHtml(url, template)

      const { render } = (await vite.ssrLoadModule(
        PATH_ENTRY_SERVER
      )) as EntryServer

      let didError = false
      const getStatusCode = () => (didError ? 500 : 200)

      const htmlParts = template.split(PLACEHOLDER_SSR)

      const { pipe, store } = await render(req, url, {
        bootstrapScripts: [PATH_ENTRY_CLIENT],
        onShellReady() {
          res.statusCode = getStatusCode()
          res.setHeader('content-type', 'text/html')
          res.write(htmlParts[0])
          pipe(res)
        },
        onAllReady() {
          const state = store.getState()
          const stateValue = JSON.stringify(state).replace(/</g, '\\u003c')
          const preloadedStateVar = `window.__PRELOADED_STATE__ = ${stateValue}`
          const htmlPart2 = htmlParts[1].replace(
            PLACEHOLDER_PRELOADED_STATE,
            preloadedStateVar
          )
          res.write(htmlPart2)
        },
        onShellError() {
          res.statusCode = getStatusCode()
          res.setHeader('content-type', 'text/html')
          res.send('<h1>Something went wrong</h1>')
        },
        onError(error) {
          didError = true
          // eslint-disable-next-line no-console
          console.error(error)
        },
      })
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      next(e)
    }
  })

  app.listen(5173)
}

createServer()
