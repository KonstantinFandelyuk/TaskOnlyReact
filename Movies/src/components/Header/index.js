import React from "react";
import { HeaderWrapper, HeaderList, HeaderListItem } from "./style";
import NavMenu from "./NavMenu/index";
import SearchItem from "./SearchList/index";
import Logo from "./Logo/index";

function Header({ switchCategory, switchLanguage, setSearchText, searcDataList }) {
  return (
    <HeaderWrapper className="header">
      <HeaderList className="header__list">
        <HeaderListItem className="header__list-item" logo>
          <Logo />
        </HeaderListItem>
        <HeaderListItem className="header__list-item">
          <NavMenu
            switchCategory={switchCategory}
            switchLanguage={switchLanguage}
            setSearchText={setSearchText}
            searcDataList={searcDataList}
          />
          <SearchItem searcDataList={searcDataList !== undefined ? searcDataList : []} />
        </HeaderListItem>
      </HeaderList>
    </HeaderWrapper>
  );
}

export default Header;
