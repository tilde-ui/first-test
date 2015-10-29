import React, {Component, Children} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      role: 'author'
    }
  }

  changeRole(newRole) {
    this.setState({
      role: newRole
    })
  }

  render() {
    let childrenWithProps = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {changeRole: this.changeRole.bind(this)})
    })

    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <h2>Molecular Playground</h2>
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
