import React from 'react';
import 'pages/home.scss';
import {Link } from 'react-router-dom'


function home () {
    return (
    <div className='homeScreen'>
        <h1>ESCAPE</h1>
        <div className='buttons'>
        <Link className='start' to="/game">Start</Link>
        <button className='logIn'>Log In</button>
        </div>

      
    </div>
  );
}


export default home
