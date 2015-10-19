import React, {Component} from 'react';
import Scene from './Scene';

class Author extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>Molecular Playground</div>
        </nav>
        <div className='container'>
          <h2>Author</h2>
          <Scene />
        </div>
      </div>
    )
  }
}

export default Author;
