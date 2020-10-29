import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Actors from '../page/Actors/index';
import Home from '../page/Home/index';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/actors" component={Actors} />
      </Switch>
      {/* <Redirect from="/" to="/" /> */}
    </Router>
  );
}

export default Routers;
