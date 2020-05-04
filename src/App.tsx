import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Todo, Time, Quote, Weather } from './components';
import { theme, GlobalStyle } from './style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Weather />
      <Time />
      <Quote />
      <Todo />
    </ThemeProvider>
  );
}

export default App;
