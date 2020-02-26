import React, { useRef } from 'react';
import '../pages/Register.scss'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

function Register(props) {
  const username = useRef('');
  const email = useRef('');
  const password = useRef('');
  const confirmPassword = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: username.current.value,
      email: email.current.value,
      password: password.current.value,
      password2: confirmPassword.current.value
    }
    
    axios.post('/users/register', data).then(() => {
      props.history.push('/dashboard');
    }).catch((e) => {
      console.log('There was an error', e);
    });
  }

    return(
    
        <div className="row mt-10">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h2 className="text-center mb-3">
          <i className="fas fa-user-plus"></i> Register
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              ref={username}
            />
          </div>
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
              placeholder="Create Password"
              ref={password}
            />
          </div>
          <div className="form-group">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              className="form-control"
              placeholder="Confirm Password"
             ref={confirmPassword}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block ">
            Register
          </button>
        </form>
        <p className="lead mt-4">Have An Account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  </div>
 

    )
    
}


export default withRouter(Register);