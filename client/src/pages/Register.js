import React from 'react';
import '../pages/Register.scss'

function Register (){
    return(
        <div className="row mt-5">
    <div className="col-md-6 m-auto">
      <div className="card card-body">
        <h1 className="text-center mb-3">
          <i className="fas fa-user-plus"></i> Register
        </h1>
        
        <form action="/users/register" method="POST">
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="name"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            
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
             
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <p className="lead mt-4">Have An Account? <a href="/users/login">Login</a></p>
      </div>
    </div>
  </div>

    )
}

export default Register