import React from 'react';
import './App.scss';
import Home from "./pages/home"
import Game from "./pages/game"
import Login from "./pages/login"
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Route exact path= "/" component={Home}/>
      <Route exact path="/game" component={Game}/>
      <Route exact path="/login" component={Login}/>
    </div>
    </Router>
  );
}


export default App;
