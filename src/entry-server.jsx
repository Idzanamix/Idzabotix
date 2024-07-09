import React from "react"
import App from "./main"
import ReactDOMServer from 'react-dom/server'


export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  return { html }
}
