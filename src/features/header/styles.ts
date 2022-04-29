import styled from 'styled-components';
import { media } from '../../styles';

interface IHeaderProps {
  backgroundColor: string;
}

export const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween}
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 16px;
  width: 100%;
  height: 50px;
  pointer-events: auto;
  user-select: auto;
  background-color: ${(props: IHeaderProps) => props.backgroundColor};
  transition: ${({ theme }) => theme.transition};

  ${media.tabletXL`
    padding: 0 40px;
  `}

  ${media.desktop`
    padding: 0 50px;
  `}
`;

export const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween}
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    width: 100px;
  }
`;
