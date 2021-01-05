import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserAccess } from "../components/UserAccess";
import { UserContent } from "../components/UserContent";
import { Clients } from "../components/Clients";
import UserAPI from "../store/UserAPI";
import { observer } from "mobx-react-lite";
import { Task } from "../components/Task";

export const Routers = observer(() => {
  return (
    <>
      {UserAPI.sessionToken ? (
        <Switch>
          <Route exact path="/" component={UserContent} />
          <Route path="/clients" component={Clients} />
          <Route path="/task" component={Task} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/login" component={UserAccess} />
        </Switch>
      )}
      {UserAPI.sessionToken ? <Redirect from="/login" to="/" /> : <Redirect from="/" to="/login" />}
    </>
  );
});
