import React from 'react';
import './App.scss';
import Home from "./pages/home";
import Login from "./pages/login";
import Game from "./pages/game";

import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Route exact path= "/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/game" component={Game}/>
      
    </div>
    </Router>
  );
}


export default App;
