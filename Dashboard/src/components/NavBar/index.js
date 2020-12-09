import React from "react";
import { Item, ItemLogo, Nav, List, ItemProfile } from "./style";
import { Link } from "react-router-dom";
import SwtichTheme from "../../store/SwtichTheme";

export const NavBar = () => {
  return (
    <Nav>
      <List>
        <ItemLogo>
          <Link to="/">
            <img src="/images/icon/logo.png" alt="" />
          </Link>
        </ItemLogo>
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
            <img src="/images/icon/speker.png" alt="" />
          </Link>
        </Item>
        <Item>
          <Link to="/">
            <img src="/images/icon/services.png" alt="" />
          </Link>
        </Item>
      </List>
      <List>
        <Item>
          <Link to="/">
            <img src="/images/icon/cloud.png" alt="" />
          </Link>
        </Item>
        <Item>
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
      </List>
    </Nav>
  );
};
