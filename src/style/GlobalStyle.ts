import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    & button,
    & input,
    & {
      background: #232124;
      font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
      color: #fff;
    }
    
    *::selection {
      background: #1de9b6;
      color:#fff;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
    }

    button {
      cursor: pointer;
    }
}`;

export default GlobalStyle;
