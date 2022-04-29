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

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px;
    font-weight: 700;
    color: ${theme.colors.heading};
  }

  h1 {
    font-weight: 900;
    font-size: 9vw;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
    user-select: none;
    transition: 0.3s;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: all 0.25s;
    cursor: pointer;
  }

  p {
    margin: 0 0 10px;
  }

  form {
    .button-group {
      text-align: right;
    }

    .field-group {
      position: relative;
      display: flex;
      flex-direction: column-reverse;
      margin-bottom: 1.5rem;
  
      label {
        font-size: ${theme.fontSizes.xs};
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
  
      input,
      select {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid ${theme.colors.gray};
        caret-color: ${theme.colors.blue};
        outline: 0;
        transition: 0.2s border-color;
  
        &:placeholder-shown {
          color: ${theme.colors.gray};
        }
  
        &:focus {
          border-color: ${theme.colors.blue};
        }
  
        &:required + label:after {
          content: '*';
          font-size: 1.9em;
          position: relative;
          top: 6px;
          display: inline-flex;
          margin-left: 0.2ch;
          transition: color 1s;
        }
  
        &:required:invalid + label:after {
          color: ${theme.colors.red};
        }
  
        &:required:valid + label:after {
          color: ${theme.colors.green};
        }
      }
  
      select {
        width: 100%;
        appearance: none;
        background-color: ${theme.colors.smoke};
        border: none;
        border-radius: 0;
        font-size: ${theme.fontSizes.sm};
  
        & + label {
          font-size: ${theme.fontSizes.sm};
        }
      }

      small {
        margin-top: 1rem;
        max-width: 300px;
      }
  
      .arrow {
        position: absolute;
        content: '';
        top: 36px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: ${theme.colors.blue} transparent transparent
          transparent;
        pointer-events: none;
      }
    }

    .field-group + button {
      display: block;
      margin-left: auto;
    }
  }
`;

export default GlobalStyle;
