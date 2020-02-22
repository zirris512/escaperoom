import React from 'react';
import './App.scss';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Register from "./pages/Register"

import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Route exact path= "/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/game" component={Game}/>
      <Route exact path="/register" component={Register}/>
      
    </div>
    </Router>
  );
}


export default App;
