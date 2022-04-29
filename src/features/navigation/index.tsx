import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledPageNav, StyledMenu, StyledMenuItem } from './styles';
import { IconHome, IconProduct } from '../icons';

const Navigation = () => (
  <StyledPageNav>
    <StyledMenu>
      <StyledMenuItem>
        <NavLink to="/">
          <IconHome />
          <div>Main Page</div>
        </NavLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <NavLink to="product/6781">
          <IconProduct />
          <div>Product Page</div>
        </NavLink>
      </StyledMenuItem>
    </StyledMenu>
  </StyledPageNav>
);

export default Navigation;
