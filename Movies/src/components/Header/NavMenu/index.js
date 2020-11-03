import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchList from './SearchList/index';
import {
  NavList,
  NavListItem,
  HeaderForm,
  SerachInput,
  LinkSpan,
  NavListDropDown,
  LanSwitch,
  Favorites,
  ThemeSwitch,
} from './style';

import { Context } from '../../../context/Context';

const NavMenu = () => {
  const {
    switchLanguage,
    favoriteData,
    setToggleFavorite,
    searcDataList,
    setSearchText,
    switchCategory,
    language,
    switchTheme,
    theme,
  } = useContext(Context);

  return (
    <nav className="nav">
      <NavList className="nav__list">
        <NavListItem className="nav__list-item">
          <Link to="/films">
            <LinkSpan>Фильмы</LinkSpan>
          </Link>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <Link
          //  to="/tv-show"
          >
            <LinkSpan>Сериалы</LinkSpan>
          </Link>
          <NavListDropDown className="dropDown">
            <NavListItem dropLi={true}>
              <Link
                // to="/tv-show/popular/"
                onClick={() => {
                  switchCategory('popular', 'Популярные сериалы');
                }}
              >
                Популярные
              </Link>
            </NavListItem>
            <NavListItem dropLi={true}>
              <Link
                // to="/tv-show/on-today"
                onClick={() => {
                  switchCategory('on_the_air', 'В эфире сегодня');
                }}
              >
                В эфире сегодня
              </Link>
            </NavListItem>
            <NavListItem dropLi={true}>По телевидению</NavListItem>
            <NavListItem dropLi={true}>
              <Link
                // to="/tv-show/top-rate"
                onClick={() => {
                  switchCategory('top_rated', 'Топовые сериалы за неделю');
                }}
              >
                Лучшие
              </Link>
            </NavListItem>
          </NavListDropDown>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <Link to="/actors">
            <LinkSpan>Актеры</LinkSpan>
          </Link>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <HeaderForm action="">
            <SerachInput
              type="text"
              name="search"
              // id="search"
              // list="search"
              placeholder="Поиск по каталогу"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            {/* <datalist id="search">
              {searcDataList && searcDataList.map((item) => <option>{item.name}</option>)}
            </datalist> */}
          </HeaderForm>
        </NavListItem>
        <NavListItem>
          <div className="switch-langvich">
            <LanSwitch
              style={{ color: language === 'ru-RU' ? 'red' : 'white' }}
              onClick={() => {
                switchLanguage('ru-RU');
              }}
            >
              RU
            </LanSwitch>
            <LanSwitch
              style={{ color: language === 'en-US' ? 'red' : 'white' }}
              onClick={() => {
                switchLanguage('en-US');
              }}
            >
              EN
            </LanSwitch>
          </div>
        </NavListItem>
        <NavListItem>
          <div className="switch-theme">
            <ThemeSwitch
              colorTheme={theme}
              onClick={() => {
                switchTheme(false);
              }}
            ></ThemeSwitch>
          </div>
        </NavListItem>
        <NavListItem>
          <Favorites onClick={() => setToggleFavorite(true)}>
            <img
              src={
                favoriteData.length > 0
                  ? '../images/header/favorite/active.png'
                  : '../images/header/favorite/none.png'
              }
              alt=""
            />
          </Favorites>
        </NavListItem>
      </NavList>
      {searcDataList ? <SearchList /> : null}
    </nav>
  );
};

export default NavMenu;
