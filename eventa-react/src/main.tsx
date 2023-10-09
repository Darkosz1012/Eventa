import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StyledEngineProvider } from '@mui/material/styles'
import MuiStyleProvider from "@config/MuiStyleProvider.tsx"
import '@assets/scss/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiStyleProvider>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </MuiStyleProvider>
  </React.StrictMode>,
)
