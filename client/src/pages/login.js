import React, { useRef } from 'react';
import '../pages/login.scss';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';


const buttonSound = new Audio('/assets/audio/button.mp3')

  function audio() {
    buttonSound.play();
  }

function Login (props) {
  const email = useRef('');
  const password = useRef('');
  function handleSubmit(e) {
  e.preventDefault();
  const data = {
    email: email.current.value,
    password: password.current.value,
  }
  
  axios.post('/users/login', data).then(() => {
    props.history.push('/game');
  }).catch((e) => {
    console.log('There was an error', e);
  });
}
    return (
        <div className='login'>
           <div className="row mt-10">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h2 className="text-center mb-3">
          <i className="fas fa-sign-in-alt"></i>  Login</h2>
      
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              ref={email}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              ref={password}
            />
          </div>
          <button onClick={audio} type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <p className="lead mt-4">
          No Account? <Link onClick={audio} to="/register">Register</Link>
        </p>
      </div>
    </div>
  </div>
        
        </div>

      
    
  );
  }



    export default withRouter (Login);
