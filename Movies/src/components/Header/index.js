import React from "react";
import { HeaderWrapper, HeaderList, HeaderListItem } from "./style";
import NavMenu from "./NavMenu/index";
import Logo from "./Logo/index";

function Header() {
  return (
    <HeaderWrapper className="header">
      <HeaderList className="header__list">
        <HeaderListItem className="header__list-item" logo>
          <Logo />
        </HeaderListItem>
        <HeaderListItem className="header__list-item">
          <NavMenu />
        </HeaderListItem>
      </HeaderList>
    </HeaderWrapper>
  );
}

export default Header;
