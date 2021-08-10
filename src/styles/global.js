import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --white: #F5F3EB;
    --background: #5F6874;
    --gold: #ECDEB0;
    --gray: #C2C2CC;
    --orange: #FF7A00;
    --red: #FF0000;
    --placeholder: #676767;
    --font-text: 'Roboto Condensed', sans-serif;
    --font-title:  'Roboto Mono', monospace;
    --font-button: 'Roboto Slab', serif;
    --font-label: 'Roboto Slab', serif;;
  }

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
    background-color: var(--background);

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default GlobalStyle;
