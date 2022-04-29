import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, media } from './styles';

const MainWrapper = styled.div`
  padding-left: 0;
  padding-bottom: 50px;

  ${media.tabletXL`
    padding-left: 100px;
  `};
`;

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <header>Placeholder for header</header>
    <MainWrapper>
      <nav>Placeholder for navbar</nav>
      <Routes>
        <Route
          path="product/:productId"
          element={<div>Placeholder for Product Page</div>}
        />
      </Routes>
    </MainWrapper>
  </ThemeProvider>
);

export default App;
