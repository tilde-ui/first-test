import React, {Component} from 'react';
import Scene from './Scene';

class Author extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <h2>Author</h2>
          <Scene />
        </div>
      </div>
    )
  }
}

export default Author;
