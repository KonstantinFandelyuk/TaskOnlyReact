import React, { useEffect } from "react";
import "./style/index.scss";
import { Routers } from "./route";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/style";
import { Provider } from "mobx-react";
import { observer } from "mobx-react-lite";
import UserAPI from "./store/UserAPI";
import SwtichTheme from "./store/SwtichTheme";

export const App = observer(() => {
  useEffect(() => {
    UserAPI.sessionToken = sessionStorage.getItem("user_id")
      ? sessionStorage.getItem("user_id")
      : "";
    UserAPI.getUserList();
    UserAPI.updateCurrentUser();
  }, []);

  const stores = {
    UserAPI,
    SwtichTheme,
  };
  return (
    <Provider {...stores}>
      <ThemeProvider theme={{ mode: SwtichTheme.themeName }}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </Provider>
  );
});
