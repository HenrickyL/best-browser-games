import { ThemeProvider } from 'styled-components'
import { Input } from './_components/Input'
import GlobalStyle from './globalCss'
function App() {

  return (
    <>
      <GlobalStyle />
      <Input.Root>
        <Input.Icon />
        <Input.Input />
        <Input.Button />
      </Input.Root>
    </>)
}

export default App
