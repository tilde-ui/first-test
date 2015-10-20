import React, {Component} from 'react';
import {Link} from 'react-router';

class Register extends Component {
  render() {
    return (
      <div className='col-md-6 col-md-offset-3'>
        <div className='panel panel-default'>
          <div className='panel-heading lead'>
            User Registration
          </div>
          <div className='panel-body'>
            <div>
              <div className='form-group'>
                <input className='form-control' type='text' placeholder='Email' />
              </div>
              <div className='form-group'>
                <input className='form-control' type='text' placeholder='Username' />
              </div>
              <div className='form-group'>
                <input className='form-control' type='password' placeholder='Password' />
              </div>
              <div className='form-group'>
                <input className='form-control' type='password' placeholder='Re-Enter Password' />
              </div>
            </div>
            <div>
              <div className='form-group'>
                <textarea className='form-control' placeholder='Bio' />
              </div>
            </div>
            <div>
              <Link to='/'>
                <button className='btn btn-primary col-md-6'>Register</button>
              </Link>
              <Link to='/'>
                <button className='btn btn-default col-md-6'>Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
