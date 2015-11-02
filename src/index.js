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
import Organizations from './components/Organizations';
import Installation from './components/Installation';
import Account from './components/Account';
import UploadScene from './components/UploadScene';
import CreateOrganization from './components/CreateOrganization';

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
        <Route path='organizations' component={Organizations} />
        <Route path='installation' component={Installation} />
        <Route path='account' component={Account} />
        <Route path='upload' component={UploadScene} />
        <Route path='createOrganization' component={CreateOrganization} />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
