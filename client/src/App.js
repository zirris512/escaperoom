import React from 'react';
import './App.scss';
import Home from "./pages/home";
import Login from "./pages/login";
import Game from "./pages/game";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";

import {BrowserRouter as Router, Route } from "react-router-dom";
import Logout from './pages/Logout';


function App() {
  return (
  <Router>
    <div>
      <Route exact path= "/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/game" component={Game}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/welcome" component={Welcome}/>
      <Route exact path="/layout" component={Layout}/>
      <Route exact path="/logout" component={Logout}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      
      
    </div>
    </Router>
  );
}


export default App;
