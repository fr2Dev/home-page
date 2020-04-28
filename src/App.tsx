import React from 'react';
import { Todo, Time, Quote } from './components';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Time />
      <Quote />
      <Todo />
    </ThemeProvider>
  );
}

export default App;
