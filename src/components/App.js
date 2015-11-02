import React, {Component, Children} from 'react';

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
          <div className='nav-wrapper'>
            <span>Molecular Playground</span>
            <ul className="right hide-on-med-and-down">
              <li>Organizations</li>
              <li>Installation</li>
              <li>Account</li>
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
