import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, media } from './styles';
import { Header, Navigation, Product } from './features';
import { useGetConfigByAppIdQuery } from './services/configuration';

const MainWrapper = styled.div`
  padding-left: 0;
  padding-bottom: 50px;

  ${media.tabletXL`
    padding-left: 100px;
  `};
`;

/**
 * For white-labelling, use **const appIdWithOutUserSection = process.env.REACT_APP_WITH_APP_ID_TWO**
 * in the component to apply a different configuration to the dashboard
 */

const App = () => {
  const appIdWithUserSection = process.env.REACT_APP_WITH_APP_ID_ONE;
  const { data: config, isLoading } =
    useGetConfigByAppIdQuery(appIdWithUserSection);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header bgColor={config.mainColor} />
      <MainWrapper>
        <Navigation />
        <Routes>
          <Route
            path="product/:productId"
            element={<Product showUser={config.hasUserSection} />}
          />
        </Routes>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;
