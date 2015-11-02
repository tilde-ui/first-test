import React, {Component} from 'react';
import {Link} from 'react-router';

class Register extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col m6 offset-m3'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title black-text'>User Registration</span>
              <div>
                <div className='input-field'>
                  <input className='validate' type='text' placeholder='Email' />
                </div>
                <div className='input-field'>
                  <input className='validate' type='text' placeholder='Username' />
                </div>
                <div className='input-field'>
                  <input className='validate' type='password' placeholder='Password' />
                </div>
                <div className='input-field'>
                  <input className='validate' type='password' placeholder='Re-Enter Password' />
                </div>
              </div>
              <div>
                <div className='input-field'>
                  <textarea className='validate' placeholder='Bio' />
                </div>
              </div>
              <div className='row'>
                <div className='col m6'>
                  <Link to='/'>
                    <button className='btn col m12'>Register</button>
                  </Link>
                </div>
                <div className='col m6'>
                  <Link to='/'>
                    <button className='btn col m12'>Cancel</button>
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

export default Register;
