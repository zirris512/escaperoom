import React from 'react';
import './App.scss';
import Home from "./pages/home";
import Login from "./pages/login";
import Game from "./pages/game";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';


function App() {
  return (
    <Router>
      <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
            >
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game" component={Game} />
      </AnimatedSwitch>
    </Router>
  );
}


export default App;
