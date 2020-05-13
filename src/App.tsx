import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Todo, Time, Quote, Weather, Container, SwitchTheme } from './components';
import { theme, GlobalStyle } from './style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SwitchTheme />
        {/* <Weather /> */}
        <Time />
        <Quote />
        <Todo />
      </Container>
    </ThemeProvider>
  );
}

export default App;
