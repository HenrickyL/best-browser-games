import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { ThemeController } from './_middlewares/Themes.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeController.getTheme()}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
