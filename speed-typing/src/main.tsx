import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from './state/index.tsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import InitiaizedStateProvider from './state/contextState.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InitiaizedStateProvider>
      <Provider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>

    </InitiaizedStateProvider>
  </React.StrictMode>,
)
