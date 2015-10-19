import React, {Component} from 'react';
import {Link} from 'react-router';

class Login extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>Molecular Playground</div>
        </nav>
        <div className='panel panel-default col-md-6 col-md-offset-3'>
          <div className='panel-heading'>Login</div>
          <div className='panel-body'>
            <div className='input-group input-group-lg'>
              <input type='text' className='form-control' placeholder='Username or Email' />
            </div>
            <div className='input-group input-group-lg'>
              <input type='text' className='form-control' placeholder='Password' />
            </div>
            <button><Link to='/author'>Login</Link></button>
            <button>Create New Account</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
