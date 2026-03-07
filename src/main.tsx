import React from 'react'
import ReactDOM from 'react-dom/client'
import { defaultTheme, Provider } from '@adobe/react-spectrum'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Provider theme={defaultTheme} colorScheme="dark">
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
