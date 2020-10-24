import React from 'react';
import { HeaderWrapper, HeaderList, HeaderListItem } from './style';
import NavMenu from './NavMenu/index';
import SearchList from './SearchList/index';
import Logo from './Logo/index';
import FavoriteList from './FavoriteList';

function Header({
  switchCategory,
  switchLanguage,
  setSearchText,
  searcDataList,
  toggleFavorite,
  setToggleFavorite,
  openModalScreen,
  favoriteData,
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
            setToggleFavorite={setToggleFavorite}
            favoriteData={favoriteData}
          />
          <SearchList
            searcDataList={searcDataList !== undefined ? searcDataList : []}
            openModalScreen={openModalScreen}
          />
          {toggleFavorite ? (
            <FavoriteList setToggleFavorite={setToggleFavorite} favoriteData={favoriteData} />
          ) : null}
        </HeaderListItem>
      </HeaderList>
    </HeaderWrapper>
  );
}

export default Header;
