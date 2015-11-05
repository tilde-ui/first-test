import React, {Component} from 'react';

import {Link} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo darken-4">
          <a href="#" className="brand-logo">Molecular Playground</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/advancedSearch'>Advanced Search</Link></li>
            <li><Link to='/organizations'>Organizations</Link></li>
            <li><Link to='/installation'>Installation</Link></li>
            <li><Link to='/account'>Account</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;
