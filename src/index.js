import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Author from './components/Author';
import GlobalAdmin from './components/GlobalAdmin';
import Register from './components/Register';
import AdvancedSearch from './components/AdvancedSearch';
import Installation from './components/Installation';

ReactDOM.render(
  (
    <Router>
      <Route path='/' component={App} >
        <IndexRoute component={Login} />
        <Route path='register' component={Register} />
        <Route path='dashboard' component={Dashboard}>
          <Route path='author' component={Author} />
          <Route path='global' component={GlobalAdmin} />
        </Route>
        <Route path='advancedSearch' component={AdvancedSearch} />
        <Route path='installation' component={Installation} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
