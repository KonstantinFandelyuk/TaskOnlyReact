import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { UserAccess } from "../components/UserAccess";
import { UserContent } from "../components/UserContent";
import { Clients } from "../components/Clients";
import UserAPI from "../store/UserAPI";
import { observer } from "mobx-react-lite";
import { NavBar } from "../components/NavBar";
import { Messeger } from "../components/Messeger";
import { DashboadrdBG, List, Item, ItemCenter } from "./style";

export const Routers = observer(({ messeger, setMesseger }) => {
  return (
    <Router>
      {UserAPI.sessionToken ? (
        <DashboadrdBG>
          <List>
            <Item>
              <NavBar setMesseger={setMesseger} messeger={messeger} />
            </Item>
            <ItemCenter>
              <Switch>
                <Route exact path="/" component={UserContent} />
                <Route path="/clients" component={Clients} />
              </Switch>
            </ItemCenter>
            <Item>
              <Messeger messeger={messeger} />
            </Item>
          </List>
        </DashboadrdBG>
      ) : (
        <Switch>
          <Route path="/login" component={UserAccess} />
        </Switch>
      )}
      {UserAPI.sessionToken ? <Redirect from="/login" to="/" /> : <Redirect from="/" to="/login" />}
    </Router>
  );
});
