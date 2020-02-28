import React from 'react';
import 'pages/Welcome.scss'
import {Link} from 'react-router-dom';

  
const buttonSound = new Audio('/assets/audio/button.mp3')

  function audio() {
    buttonSound.play();
  }

function Welcome (){
    return(
    <div className="row mt-5">
    <div className="col-md-6 m-auto">
      <div className="card card-body text-center">
        <h1><i className="fab fa-node-js fa-3x"></i></h1>
        <p>Create an account or login</p>
        <Link onClick={audio} to="/register" className="btn btn-primary btn-block mb-2"
          >Register</Link>        >
        <Link onClick={audio} to="/login" className="btn btn-secondary btn-block">Login</Link>
      </div>
    </div>
  </div>
  

        
    )
}


export default Welcome