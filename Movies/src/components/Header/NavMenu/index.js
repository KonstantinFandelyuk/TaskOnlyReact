import React from "react";
import { NavList, NavListItem, HeaderForm, SerachInput, LinkSpan, NavListDropDown } from "./style";
import { Link } from "react-router-dom";

function NavMenu() {
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
          <NavListDropDown className="ddd">
            <NavListItem dropLi={true}>Популярные</NavListItem>
            <NavListItem dropLi={true}>В эфире сегодня</NavListItem>
            <NavListItem dropLi={true}>По телевидению</NavListItem>
            <NavListItem dropLi={true}>Лучшие</NavListItem>
          </NavListDropDown>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <Link to="/actors">
            <LinkSpan>Актеры</LinkSpan>
          </Link>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <HeaderForm action="">
            <SerachInput type="search" name="search" id="search" placeholder="Поиск по каталогу" />
          </HeaderForm>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <div className="switch-langvich">
            <div className="ru">RU</div>
            <div className="EN">EN</div>
          </div>
        </NavListItem>
        <NavListItem className="nav__list-item">
          <div className="favorites">Heart</div>
        </NavListItem>
      </NavList>
    </nav>
  );
}

export default NavMenu;
