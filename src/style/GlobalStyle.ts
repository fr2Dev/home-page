import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --color-interaction: #1de9b6;
  --color-light: #fff;
  --color-dark: #232124;

  --color-black: #333;
  --color-font: var(--color-light);
  --color-background: #121212;
  --color-foreground: #1f1b24;
  --color-overlay: rgba(0, 0, 0, 0.35);

}
  body {
    margin: 0;
    
    & button,
    & input,
    & {
      background: var(--color-dark);
      font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
      color: var(--color-light);
    }
    
    *::selection {
      background: var(--color-interaction);
      color: var(--color-light);
    }

    ul {
      list-style-type: none;
      padding-left: 0;
    }

    button {
      cursor: pointer;
    }

    @keyframes flash {
    from {
      background: rgba(255, 255, 255, 0.25);
    }

    to {
      background: transparent;
    }
  }
}`;

export default GlobalStyle;
