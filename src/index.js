import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Author from './components/Author';
import Register from './components/Register';

ReactDOM.render(
  (
    <Router>
      <Route path='/' component={App} >
        <IndexRoute component={Login} />
        <Route path='author' component={Author} />
        <Route path='register' component={Register} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
