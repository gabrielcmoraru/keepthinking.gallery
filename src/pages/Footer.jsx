import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <footer role="contentinfo">
    <FooterNav>
      <FooterMenu>
        <MenuItem>Newsletter</MenuItem>
        <MenuItem>Contact</MenuItem>
        <MenuItem>Press rooms</MenuItem>
      </FooterMenu>
    </FooterNav>
  </footer>
);

export default Footer;

const FooterNav = styled.nav`
  margin: 0 5% 0 5%;
`;

const FooterMenu = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 1em 0 0;
`;

const MenuItem = styled.li`
&:nth-child(n+2) {
  padding: 0 0 0 1.2em;
}
`;
