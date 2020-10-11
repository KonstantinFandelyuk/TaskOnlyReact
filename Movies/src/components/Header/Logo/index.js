import React from "react";
import { Link } from "react-router-dom";
import { LogoList, LogoText, LogoListItem } from "./style";

function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <LogoList className="logo__list">
          <LogoListItem className="logo__list-item" active>
            <Link to="/">
              <img src="/images/header/logo.png" alt="" className="image-logo" />
            </Link>
          </LogoListItem>
          <LogoListItem className="logo__list-item">
            <LogoText className="logo-text">Movies Bank</LogoText>
          </LogoListItem>
        </LogoList>
      </div>
    </Link>
  );
}

export default Logo;
