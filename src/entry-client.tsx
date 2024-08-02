import './index.css'
import React from 'react'
import { ReduxProvider } from './app/providers/Redux/Redux'
import ReactDOM from 'react-dom/client'
import App from './main'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
)
