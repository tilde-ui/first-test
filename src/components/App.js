import React, {Component, Children} from 'react';

import {Link} from 'react-router';

class App extends Component {
  constructor() {
    super();

    this.state = {
      role: 'author'
    }
  }

  componentWillMount() {
    $(".button-collapse").sideNav();
  }

  changeRole(newRole) {
    this.setState({
      role: newRole
    })
  }

  render() {
    let childrenWithProps = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {changeRole: this.changeRole.bind(this), role: this.state.role})
    })

    return (
      <div id='backdrop'>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Molecular Playground</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/advancedSearch'>Advanced Search</Link></li>
              <li><Link to='/installation'>Organizations</Link></li>
              <li><Link to='/installation'>Installation</Link></li>
              <li><a>Account</a></li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default App;
