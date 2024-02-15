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
      <div style={{width:500}}>
        <Input.Root>
        <Input.Field>
          <Input.Input placeholder='Olá mundo'/>
          <Input.Icon />
        </Input.Field>
        {/* <div style={{height: 50}}> */}
          <Input.Button text='oláaaaaa'/>
        {/* </div> */}
        </Input.Root>
      </div>
      <button onClick={()=>{
        ThemeController.toggle()
        setTheme(ThemeController.getTheme())
      }}>Theme</button>
    </ThemeProvider>
    )
}

export default App
