import React from "react";
import { FooterText, FooterDate } from "./style";

function Footer() {
  const oldDate = new Date().getFullYear() - 1;
  const newDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <FooterText className="footer-text">
        ©
        <FooterDate>
          {oldDate}-{newDate}
        </FooterDate>
      </FooterText>
    </footer>
  );
}

export default Footer;
