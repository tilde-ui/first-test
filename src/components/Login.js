import React, {Component} from 'react';
import {Link} from 'react-router';

class Login extends Component {
  login() {
    this.props.changeRole(this.username.value)
  }

  render() {
    return (
      <div className='row'>
        <div className='col m6 offset-m3'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title black-text'>Login</span>
              <div className='input-field'>
                <input ref={(ref) => this.username = ref} type='text' className='form-control' placeholder='Username or Email' />
              </div>
              <div className='input-field'>
                <input type='text' className='form-control' placeholder='Password' />
              </div>
              <div className='row'>
                <div className='col m6'>
                  <Link to='/dashboard/global'>
                    <button
                      className='btn col m12'
                      onClick={this.login.bind(this)}>
                      Login</button>
                  </Link>
                </div>
                <div className='col m6'>
                  <Link to='/register'>
                    <button
                      className='btn col m12'>
                      Create New Account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
