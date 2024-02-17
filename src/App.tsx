import { useState } from 'react'
import { ThemeController, lightTheme, Theme } from './_middlewares/Themes'
import GlobalStyle from './globalCss'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './_pages/Login'
import { Base } from './_pages/Base'
import BaseServiceRoutes from './_routes/BaseServiceRoutes'
import { Home } from './_pages/Home'


function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {/* //TODO: usar useRouterError para redirecionar a rota  */}
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="/auth" element={<Login />} />
                <Route path="*" element={<h1>NotFound</h1>} />
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}


export default App
