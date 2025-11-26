import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Data from './Data';
import Core from './Core';
import Plan from './Plan';
import Global from './Global';
import Platform from './Platform';
import Customer from './Customer';
import Sub from './Subscribe';
import Footer from './Footer';

const App = () =>{
  return(
    <div>
      <Navbar />
      <Home />
      <Data />
      <Core />
      <Plan />
      <Global />
      <Platform />
      <Customer />
      <Sub />
      <Footer />
    </div>
  )
}

export default App;