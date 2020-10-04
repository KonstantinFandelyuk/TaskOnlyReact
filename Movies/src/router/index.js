import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../page/Home/index";
import Header from "../components/Header/index";

function Routers() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={Home} />
        <Redirect from="/" to="/" />
      </Router>
    </>
  );
}

export default Routers;
