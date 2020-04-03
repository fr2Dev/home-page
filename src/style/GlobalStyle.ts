import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    & button,
    & input,
    & {
      font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
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
