import React, { useContext } from 'react';
import { HeaderWrapper, HeaderList, HeaderListItem } from './style';
import NavMenu from './NavMenu/index';
import SearchList from './SearchList/index';
import Logo from './Logo/index';
import FavoriteList from './FavoriteList';
import { Context } from '../../context/Context';

const Header = () => {
  const { toggleFavorite, searcDataList } = useContext(Context);
  console.log('toggleFavorite :>> ', toggleFavorite);
  return (
    <HeaderWrapper className="header">
      <HeaderList className="header__list">
        <HeaderListItem className="header__list-item" logo>
          <Logo />
        </HeaderListItem>
        <HeaderListItem className="header__list-item">
          <NavMenu />
          {searcDataList ? <SearchList /> : null}
          {toggleFavorite ? <FavoriteList /> : null}
        </HeaderListItem>
      </HeaderList>
    </HeaderWrapper>
  );
};

export default Header;
