import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Author from './components/Author';

ReactDOM.render(
  (
    <Router>
      <Route path='/' component={App} >
        <IndexRoute path='login' component={Login} />
        <Route path='author' component={Author} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
