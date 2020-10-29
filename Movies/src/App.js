import React, { useContext } from 'react';
import Footer from './components/Footer/Footer';
// import Header from './components/Header';
import Routers from './router/index';
// import { Context } from './context/Context';

function App() {
  // const { toggleFavorite } = useContext(Context);
  // console.log('useContext :>> ', toggleFavorite);
  return (
    <>
      {/* <Header /> */}
      <Routers />
      <Footer />
    </>
  );
}

export default App;
