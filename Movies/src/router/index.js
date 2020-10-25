import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from '../page/Home/index';

function Routers() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Redirect from="/" to="/" />
      </Router>
    </>
  );
}

export default Routers;
