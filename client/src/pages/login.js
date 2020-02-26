import React from 'react';
import '../pages/login.scss';
import {Link} from 'react-router-dom';



function Login () {
    return (
        <div className='login'>
           <div className="row1 mt-5">
    <div className="col1-md-6 m-auto">
      <div className="card1 card-body">
        <h1 className="text1-center mb-3"><i className="fas1 fa-sign-in-alt"></i>  Login</h1>
      
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

