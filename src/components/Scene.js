import React, {Component} from 'react';

class Scene extends Component {
  render() {
    return (
      <div className='col-md-4 col-md-offset-4'>
        <div className='panel panel-default'>
          <div className='panel-heading lead'>My Scenes</div>
          <div className='panel-body'>
            <ul>
              <li>Scene 1</li>
              <li>Scene 2</li>
              <li>Scene 3</li>
              <li>Scene 4</li>
              <li>Scene 5</li>
              <li>Scene 6</li>
              <li>Scene 7</li>
              <li>Scene 8</li>
            </ul>
          </div>
          <div className='panel-footer'>
            <button className='btn btn-primary pull-left'>Upload</button>
            <button className='btn btn-default pull-right'>Preview</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Scene;
