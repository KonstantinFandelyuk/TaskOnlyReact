import React, { useEffect, useState } from "react";
import "./style/index.scss";
import { Routers } from "./route";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/style";
import { Provider } from "mobx-react";
import { observer } from "mobx-react-lite";
import UserAPI from "./store/UserAPI";
import ClientsAPI from "./store/ClientsAPI";
import SwtichTheme from "./store/SwtichTheme";

export const App = observer(() => {
  const [messeger, setMesseger] = useState(true);
  
  useEffect(() => {
    UserAPI.sessionToken = sessionStorage.getItem("user_id")
      ? sessionStorage.getItem("user_id")
      : "";
    UserAPI.getUserList();
    UserAPI.updateCurrentUser();
    ClientsAPI.checkClientsList();
  }, []);

  const stores = {
    UserAPI,
    ClientsAPI,
    SwtichTheme,
  };
  return (
    <Provider {...stores}>
      <ThemeProvider theme={{ mode: SwtichTheme.themeName }}>
        <GlobalStyle />
        <Routers setMesseger={setMesseger} messeger={messeger} />
      </ThemeProvider>
    </Provider>
  );
});
