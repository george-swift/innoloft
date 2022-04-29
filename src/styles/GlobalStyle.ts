import { createGlobalStyle, ThemeProps } from 'styled-components';
import theme from './theme';

type MainThemeProps = ThemeProps<typeof theme>;

const GlobalStyle = createGlobalStyle<MainThemeProps>`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Open Sans Light'),
    url('../fonts/OpenSans-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'),
    url('../fonts/OpenSans-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    src: local('Open Sans Medium'),
    url('../fonts/OpenSans-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Open Sans SemiBold'),
    url('../fonts/OpenSans-SemiBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'),
    url('../fonts/OpenSans-Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src: local('Open Sans ExtraBold'),
    url('../fonts/OpenSans-ExtraBold.ttf') format('ttf');
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    line-height: 1.2;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${theme.fonts};
    font-size: ${theme.fontSizes.base};
    color: ${theme.colors.bodyText};
  }

  #root,
  body {
    min-height: 100%;
  }
`;

export default GlobalStyle;
