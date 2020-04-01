import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    & button,
    & input,
    & {

    font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
    }
}`;

export default GlobalStyle;
