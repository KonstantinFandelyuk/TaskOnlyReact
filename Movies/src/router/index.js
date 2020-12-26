import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Context } from '../context/Context';
import Actors from '../components/ActorsList/index';
import Home from '../page/Home/index';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';
import SearchPage from '../components/SearchPage';

function Routers() {
  const { token, setToken } = useContext(Context);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('userID') ? sessionStorage.getItem('userID') : '';
    setToken(sessionToken);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
      {token !== '' ? (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/actors" component={Actors} />
            <SearchPage path="/search-page/" component={SearchPage} />
          </Switch>
          <Footer />
        </>
      ) : null}
      {token === '' ? <Redirect from="/" to="/login" /> : <Redirect from="/login" to="/" />}
    </Router>
  );
}

export default Routers;
