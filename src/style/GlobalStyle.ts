import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-light: #fff;
    --color-dark: #232124;
    --color-black: #333;
    --color-font: var(--color-light);
    --color-overlay: rgba(0, 0, 0, 0.35);
    --padding: 8px;
    --font-size-greeting: 3rem;
  }

  /* THEME */
  .dark {
    --color-interaction: #1de9b6;
    --color-font: var(--color-light);
    --color-background-main: var(--color-dark);
    --color-background: #121212;
    --color-foreground: #1f1b24;
    --color-opacity: rgba(250, 250, 250, 0.15);
    --color-opacity-lowest: rgba(250, 250, 250, 0.05);
  }
  .light {
    --color-interaction: #0f9875;
    --color-font: var(--color-black);
    --color-background-main: #fdfdfd;
    --color-background: var(--color-light);
    --color-foreground: #eaeaea;
    --color-opacity: rgba(0, 0, 0, 0.15);
    --color-opacity-lowest: rgba(0, 0, 0, 0.05);
  }
  /* END THEME */

  body {
    margin: 0;
    
    & button,
    & input,
    & {
      background: var(--color-background-main);
      font-family: 'Open Sans', Verdana, Geneva, Tahoma, sans-serif;
      color: var(--color-font);
    }

    &:not([class]) {
      background-color: var(--color-dark);
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

  }
`;

export default GlobalStyle;
