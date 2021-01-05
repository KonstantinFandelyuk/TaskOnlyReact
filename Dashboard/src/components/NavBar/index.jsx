import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SwitchTheme from "../../store/SwitchTheme";
import UserAPI from "../../store/UserAPI";
import { Item, Nav, List, ItemProfile } from "./style";

export const NavBar = observer(
  ({ setShowMessenger, showMessenger, setShowUserProfile, showUserProfile }) => {
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
            <Link to="/task">
              <img src="/images/icon/services.png" alt="" />
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <img src="/images/icon/cloud.png" alt="" />
            </Link>
          </Item>
          <Item onClick={() => setShowMessenger(showMessenger ? false : true)}>
            <Link to="/">
              <img src="/images/icon/chat.png" alt="" />
            </Link>
          </Item>
          <ItemProfile onClick={() => setShowUserProfile(showUserProfile !== true)}>
            <img
              src={
                UserAPI.currentUser.userPhoto
                  ? UserAPI.currentUser.userPhoto
                  : "/images/icon/default-profile.jpg"
              }
              alt=""
            />
          </ItemProfile>
          <Item onClick={() => SwitchTheme.switchTheme()}>
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
  },
);
