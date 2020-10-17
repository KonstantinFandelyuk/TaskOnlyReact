import React from "react";
import { Link } from "react-router-dom";
import { itemsArray } from "../../../helpers/helpers";
import {
  NavList,
  NavListItem,
  HeaderForm,
  SerachInput,
  LinkSpan,
  NavListDropDown,
  LanSwitch,
  Favorites,
} from "./style";

function NavMenu({
  switchCategory,
  switchLanguage,
  setSearchText,
  searcDataList,
  setSwitchFavorite,
}) {
  return (
    <nav className="nav">
      <NavList className="nav__list">
        <NavListItem className="nav__list-item">
          <Link to="/films">
            <LinkSpan>Фильмы</LinkSpan>
          </Link>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <Link to="/tv-show">
            <LinkSpan>Сериалы</LinkSpan>
          </Link>
          <NavListDropDown className="dropDown">
            <NavListItem dropLi={true}>
              <Link
                to="/tv-show/popular"
                onClick={() => {
                  switchCategory("popular", "Популярные сериалы");
                }}
              >
                Популярные
              </Link>
            </NavListItem>
            <NavListItem dropLi={true}>
              <Link
                to="/tv-show/on-today"
                onClick={() => {
                  switchCategory("on_the_air", "В эфире сегодня");
                }}
              >
                В эфире сегодня
              </Link>
            </NavListItem>
            <NavListItem dropLi={true}>По телевидению</NavListItem>
            <NavListItem dropLi={true}>
              <Link
                to="/tv-show/top-rate"
                onClick={() => {
                  switchCategory("top_rated", "Топовые сериалы за неделю");
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
              onClick={() => {
                switchLanguage("ru-RU");
              }}
            >
              RU
            </LanSwitch>
            <LanSwitch
              onClick={() => {
                switchLanguage("en-US");
              }}
            >
              EN
            </LanSwitch>
          </div>
        </NavListItem>
        <NavListItem>
          <Favorites onClick={() => setSwitchFavorite(true)}>
            <img
              src={
                itemsArray.length > 0
                  ? "../images/header/favorite/active.png"
                  : "../images/header/favorite/none.png"
              }
              alt=""
            />
          </Favorites>
        </NavListItem>
      </NavList>
    </nav>
  );
}

export default NavMenu;
