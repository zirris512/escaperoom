import React from 'react';
import 'pages/home.scss';
import {Link } from 'react-router-dom'


function home () {
    return (
    <div className='homeScreen'>
        <h1>ESCAPE</h1>
        <div className='buttons'>
        <Link className='start' to="/register">Register</Link>
        <Link className='logIn'to="/logIn">Log In</Link>
        </div>

      
    </div>
  );
}


export default home
