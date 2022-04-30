import styled from 'styled-components';
import { media, theme } from '../../styles';

export const StyledPageNav = styled.nav`
  ${theme.mixins.flexCenter}
  position: fixed;
  top: auto;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 70px;
  height: 70px;
  text-align: center;
  background-color: ${theme.colors.smoke};
  z-index: 1;

  & > * {
    width: 100%;
    height: 100%;
  }

  ${media.tabletXL`
    top: 0;
    left: 0;
    width: 100px;
    flex-direction: column;
    min-height: 100vh;
    z-index: 0;

    & > * {
      height: auto;
    }
  `}
`;

export const StyledMenu = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  ${media.tabletXL`
    flex-direction: column
  `}
`;

export const StyledMenuItem = styled.li`
  flex-grow: 1;
  flex-basis: 100%;
  height: 100%;
  color: ${theme.colors.blue};
  font-size: ${theme.fontSizes.xs};

  a {
    ${theme.mixins.flexCenter}
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-left: 0;
    border-top: 3px solid transparent;

    &:hover,
    &:focus,
    &:active {
      border-top: 3px solid ${theme.colors.blue};
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
  }

  ${media.tabletXL`
    width: 100%;
    flex: 0 0 auto;
    height: auto;

    a {
      display: block;
      padding: 15px 0;
      border-top: 0;
      border-left: 5px solid transparent;

      &:hover,
      &:focus,
      &:active {
        font-weight: 700;
        background-color: ${theme.colors.white};
        border-top: 0;
        border-left: 5px solid ${theme.colors.blue};
      }
    }
  `}
`;
