import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Actors from '../components/ActorsList/index';
import Home from '../page/Home/index';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
      </Switch>
      {/* <Redirect from="/" to="/" /> */}
    </Router>
  );
}

export default Routers;
