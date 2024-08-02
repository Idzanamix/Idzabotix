/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import App from "./main"
import ReactDOMServer from 'react-dom/server'
import { ReduxProvider } from "./app/providers/Redux/Redux"
import { StaticRouter } from "react-router-dom/server";


export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <ReduxProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ReduxProvider>
    </React.StrictMode>
  )
  return { html }
}
