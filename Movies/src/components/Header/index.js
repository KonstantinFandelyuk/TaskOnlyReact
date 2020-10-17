import React from "react";
import { HeaderWrapper, HeaderList, HeaderListItem } from "./style";
import NavMenu from "./NavMenu/index";
import SearchList from "./SearchList/index";
import Logo from "./Logo/index";
import FavoriteList from "./FavoriteList";

function Header({
  switchCategory,
  switchLanguage,
  setSearchText,
  searcDataList,
  switchFavorite,
  setSwitchFavorite,
  openModalScreen,
}) {
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
            setSwitchFavorite={setSwitchFavorite}
          />
          <SearchList
            searcDataList={searcDataList !== undefined ? searcDataList : []}
            openModalScreen={openModalScreen}
          />
          {switchFavorite ? <FavoriteList setSwitchFavorite={setSwitchFavorite} /> : null}
        </HeaderListItem>
      </HeaderList>
    </HeaderWrapper>
  );
}

export default Header;
