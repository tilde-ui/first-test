import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <h2>Molecular Playground</h2>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default App;
