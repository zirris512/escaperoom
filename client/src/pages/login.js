import React from 'react';
import '../pages/login.scss';
import {Link} from 'react-router-dom';



function Login () {
    return (
        <div className='login'>
           <div className="row mt-10">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h2 className="text-center mb-3">
          <i className="fas fa-sign-in-alt"></i>  Login</h2>
      
        <form action="/users/login" method="POST">
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
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
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <p className="lead mt-4">
          No Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  </div>
        
        </div>

      
    
  );
  }


    export default Login

