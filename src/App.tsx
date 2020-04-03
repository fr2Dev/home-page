import React from 'react';
import { Todo } from './components';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './style';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Todo />
      </ThemeProvider>
    </div>
  );
}

export default App;
