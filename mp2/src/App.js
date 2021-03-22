import React, { useState } from 'react';
import Search from './components/Search'

import Results from './components/Results'
import Popup from './components/Popup'
import Main from './pages'

import  {Switch, Route} from 'react-router-dom'// import react-router


function App() {
  
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  ); 
}

export default App;
