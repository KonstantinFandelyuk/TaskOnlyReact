import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ActorsList from '../components/ActorsList';
import Home from '../page/Home/index';

function Routers() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        {/* <ActorsList path="/actors/" component={ActorsList} /> */}
        <Redirect from="/" to="/" />
      </Router>
    </>
  );
}

export default Routers;
