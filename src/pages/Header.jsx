import React from 'react';
import styled from 'styled-components';
import search from 'assets/svg/magnifier.svg';
import menu from 'assets/svg/menu.svg';

const Header = () => (
  <header role="banner">
    <Nav>
      <NavButton role="search" type="text" aria-label="Search on the website">
        <a href="/">
          <img src={search} alt="Search" width="25px" height="25px" />
        </a>
      </NavButton>
      <NavButton role="navigation" type="text" aria-label="Open menu navigation">
        <a href="/">
          <img src={menu} alt="Menu" width="30px" height="30px" />
        </a>
      </NavButton>
    </Nav>
    <Title>ec1 gallery</Title>
  </header>
);

export default Header;

const Nav = styled.nav`
  width: 95%;
  display: block;
  text-align: right;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  margin-top: 0.5em;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2em;
  font-family: Tahoma, Geneva, sans-serif;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 300;
`;
