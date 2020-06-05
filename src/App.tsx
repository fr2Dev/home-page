import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Todo, Time, Quote, Weather, Container, SwitchTheme } from './components';
import { GlobalStyle } from './style';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Container>
        <Weather />
        <SwitchTheme />
        <Time />
        <Quote />
        <Todo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
