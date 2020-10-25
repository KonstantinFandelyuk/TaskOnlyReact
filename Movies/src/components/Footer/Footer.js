import React from 'react';
import { FooterContainer, FooterTitle } from './style';

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle className="footer-title">
        Все права защищены {new Date().getFullYear()}г.
      </FooterTitle>
    </FooterContainer>
  );
}

export default Footer;
