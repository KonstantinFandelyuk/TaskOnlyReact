import React from "react";
import { Item, Nav, List, ItemProfile } from "./style";
import { Link } from "react-router-dom";
import SwtichTheme from "../../store/SwtichTheme";
import UserAPI from "../../store/UserAPI";

export const NavBar = ({ setMesseger, messeger }) => {
  return (
    <Nav>
      <List>
        <Item>
          <Link to="/">
            <img src="/images/icon/logo.png" alt="" />
          </Link>
        </Item>
        <Item>
          <Link to="/">
            <img src="/images/icon/app.png" alt="" />
          </Link>
        </Item>
        <Item>
          <Link to="/clients">
            <img src="/images/icon/customer.png" alt="" />
          </Link>
        </Item>
        <Item>
          <Link to="/">
            <img src="/images/icon/services.png" alt="" />
          </Link>
        </Item>
        <Item>
          <Link to="/">
            <img src="/images/icon/cloud.png" alt="" />
          </Link>
        </Item>
        <Item onClick={() => setMesseger(messeger ? false : true)}>
          <Link to="/">
            <img src="/images/icon/chat.png" alt="" />
          </Link>
        </Item>
        <ItemProfile>
          <img src="/images/icon/default-profile.jpg" alt="" />
        </ItemProfile>
        <Item onClick={() => SwtichTheme.switchTheme()}>
          <img src="/images/icon/switchTheme.svg" alt="" />
        </Item>
        <Item onClick={() => UserAPI.logOut()}>
          <Link to="/">
            <img src="/images/icon/power.png" alt="" />
          </Link>
        </Item>
      </List>
    </Nav>
  );
};
