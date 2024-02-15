import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
    scroll-behavior: smooth;
    -webkit-user-drag: none; /* Dragable */
  }

  body {
    color: ${prop=>prop.theme.text};
    background-color: ${(props) => props.theme.background};;
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  /* Redefinindo estilos específicos para inputs */
  input {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
  }

  /* Redefinindo estilos específicos para botões */
  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
