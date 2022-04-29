import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledNav } from './styles';
import { IconInnoloft } from '../icons';

type HeaderProps = {
  bgColor: string;
};

const Header = ({ bgColor }: HeaderProps) => (
  <StyledHeader backgroundColor={bgColor}>
    <StyledNav aria-label="Site header">
      <Link to="/">
        <IconInnoloft />
      </Link>
    </StyledNav>
  </StyledHeader>
);

export default Header;
