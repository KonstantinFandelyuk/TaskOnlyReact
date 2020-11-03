import React, { useContext } from 'react';
import { HeaderWrapper, HeaderList, HeaderListItem } from './style';
import NavMenu from './NavMenu/index';
import Logo from './Logo/index';
import FavoriteList from './FavoriteList';
import { Context } from '../../context/Context';

const Header = () => {
  const { toggleFavorite, searcDataList } = useContext(Context);
  return (
    <HeaderWrapper className="header">
      <HeaderList className="header__list">
        <HeaderListItem className="header__list-item" logo>
          <Logo />
        </HeaderListItem>
        <HeaderListItem className="header__list-item">
          <NavMenu />
          {toggleFavorite ? <FavoriteList /> : null}
        </HeaderListItem>
      </HeaderList>
    </HeaderWrapper>
  );
};

export default Header;
