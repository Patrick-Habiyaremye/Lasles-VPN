import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Data from './Data';
import Core from './Core';
import Plan from './Plan';

const App = () =>{
  return(
    <div>
      <Navbar />
      <Home />
      <Data />
      <Core />
      <Plan />
    </div>
  )
}

export default App;