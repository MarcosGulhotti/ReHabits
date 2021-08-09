import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, div, ul, button, h1, p, img, h2, h3, nav, a {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    list-style-type: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }
  }
` 

export default GlobalStyle
