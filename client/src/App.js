import React from 'react';
import './App.scss';
import Home from "./pages/home"
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Route exact path= "/" component={Home}/>
    </div>
    </Router>
  );
}


export default App;
