import React, {Component} from 'react';
import {Link} from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <div className='panel panel-default'>
          <div className='panel-heading lead'>Login</div>
          <div className='panel-body'>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Username or Email' />
            </div>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Password' />
            </div>
            <div>
              <Link to='/author'>
                <button
                  className='btn btn-primary col-md-6'>
                  Login</button>
              </Link>
              <Link to='/register'>
                <button
                  className='btn btn-default col-md-6'>
                  Create New Account</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
