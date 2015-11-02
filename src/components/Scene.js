import React, {Component} from 'react';

class Scene extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>My Scenes</span>
          <ul className='collection' style={{height: 300}}>
            <li className='collection-item'>Scene 1</li>
            <li className='collection-item'>Scene 2</li>
            <li className='collection-item'>Scene 3</li>
            <li className='collection-item'>Scene 4</li>
            <li className='collection-item'>Scene 5</li>
            <li className='collection-item'>Scene 6</li>
            <li className='collection-item'>Scene 7</li>
            <li className='collection-item'>Scene 8</li>
          </ul>
          <div className='row'>
            <div className='col m12'>
              <button className='btn col m12'>Preview</button>
            </div>
          </div>
          <div className='row'>
            <div className='col m12'>
              <button className='btn col m12'>Upload</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Scene;
