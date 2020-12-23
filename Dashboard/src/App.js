import React, { useEffect, useState } from "react";
import "./style/index.scss";
import { Routers } from "./route";
import { observer } from "mobx-react-lite";
import UserAPI from "./store/UserAPI";
import ClientsAPI from "./store/ClientsAPI";
import { NavBar } from "./components/NavBar";
import { Messenger } from "./components/Messenger";
import { DashboardBG, List, Item, ItemCenter } from "./style/gridStyle";
import { UserProfile } from "./components/UserProfile";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/style";
import SwitchTheme from "./store/SwitchTheme";

export const App = observer(() => {
  const [showMessenger, setShowMessenger] = useState(true);
  const [showUserProfile, setShowUserProfile] = useState(false);

  useEffect(() => {
    UserAPI.sessionToken = sessionStorage.getItem("user_id")
      ? sessionStorage.getItem("user_id")
      : "";
    UserAPI.getUserList();
    UserAPI.updateCurrentUser();
    ClientsAPI.checkClientsList();
  }, []);

  return (
    <ThemeProvider theme={{ mode: SwitchTheme.themeName }}>
      <GlobalStyle />
      <DashboardBG>
        {showUserProfile && <UserProfile setShowUserProfile={setShowUserProfile} />}
        <List>
          <Item>
            <NavBar
              setShowMessenger={setShowMessenger}
              showMessenger={showMessenger}
              setShowUserProfile={setShowUserProfile}
              showUserProfile={showUserProfile}
            />
          </Item>
          <ItemCenter>
            <Routers />
          </ItemCenter>
          <Item>
            <Messenger showMessenger={showMessenger} />
          </Item>
        </List>
      </DashboardBG>
    </ThemeProvider>
  );
});
