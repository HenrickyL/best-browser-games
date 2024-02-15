import { useState } from 'react'
import { Input } from './_components/Input'
import { ThemeController, lightTheme, Theme } from './_middlewares/Themes'
import GlobalStyle from './globalCss'
import { ThemeProvider } from 'styled-components'


function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      
      <GlobalStyle />
      <h1>Olá Mundo</h1>
      <Input.Root>
      <Input.Field>
        <Input.Input placeholder='Olá mundo'/>
        <Input.Icon />
      </Input.Field>
        {/* <Input.Button text='olá'/> */}
      </Input.Root>

      <button onClick={()=>{
        ThemeController.toggle()
        setTheme(ThemeController.getTheme())
      }}>Theme</button>
    </ThemeProvider>
    )
}

export default App
