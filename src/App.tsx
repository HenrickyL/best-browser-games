import { useState } from 'react'
import { ThemeController, lightTheme, Theme } from './_middlewares/Themes'
import GlobalStyle from './globalCss'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './_pages/Home'


function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <button onClick={()=>{
        ThemeController.toggle()
        setTheme(ThemeController.getTheme())
      }}>Theme</button>


      {/* //TODO: usar useRouterError para redirecionar a rota  */}
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>NotFound</h1>} />

            </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}


export default App
