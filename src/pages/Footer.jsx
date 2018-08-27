import React from 'react';
import styled from 'styled-components';
import facebook from 'assets/facebook.png';
import twitter from 'assets/twitter.png';
import youtube from 'assets/youtube.png';

const Footer = () => (
  <footer role="contentinfo">
    <FooterNav>
      <NavigationMenu>
        <FooterMenu>
          <MenuItem><a href="/">Newsletter</a></MenuItem>
          <MenuItem><a href="/">Contact</a></MenuItem>
          <MenuItem><a href="/">Press rooms</a></MenuItem>
        </FooterMenu>
      </NavigationMenu>
      <SocialMenu>
        <FooterMenu>
          <MenuItem><a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a></MenuItem>
          <MenuItem><a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a></MenuItem>
          <MenuItem><a href="https://www.youtube.com/"><img src={youtube} alt="youtube" /></a></MenuItem>
        </FooterMenu>
      </SocialMenu>
    </FooterNav>
    <Address>
      <p>EC1 GALLERY<br />
        344 Clerkenwell Road<br />
        London<br />
        EC1 5RS<br />
        Tel +44 (0) 207 123 4567
      </p>
    </Address>
    <BottomBorder>
      <BottomWrap>
        <Logo>
          <p>&copy; 2017 EC1 GALLERY</p>
        </Logo>
        <Legal>
          <NavigationMenu>
            <BottomWrapMenu>
              <MenuItem><a href="/"> Cookie policy</a></MenuItem>
              <MenuItem><a href="/">Terms of sale</a></MenuItem>
              <MenuItem><a href="/">Privacy notice</a></MenuItem>
            </BottomWrapMenu>
          </NavigationMenu>
        </Legal>
      </BottomWrap>
    </BottomBorder>
  </footer>
);

export default Footer;

const FooterNav = styled.nav`
  margin: 0 5% 0 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 1em 0 0;
`;

const NavigationMenu = styled.div`
`;

const SocialMenu = styled.div`
`;

const MenuItem = styled.li`
  font-weight: 650;
  &:nth-child(n+2) {
    padding: 0 0 0 1.2em;
  }
  & a {
    text-decoration: none;
    color: black;
  }
`;

const Address = styled.div`
  margin: 0 5% 5%;
`;

const BottomBorder = styled.div`
  background: #333;
  height: 100%;
`;

const BottomWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5%;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #777;
  text-transform: uppercase;
`;

const Legal = styled.div`
`;

const BottomWrapMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  & a {
    color: #fff;
    font-weight: 200;
  }
`;
