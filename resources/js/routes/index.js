import React from 'react';
import { Switch } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { history } from 'services';

import Dashboard from 'screens/Dashboard';
import Kit from 'screens/Kit';
import SignIn from 'screens/Sign-in'

export default () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/kit/" component={Kit} />
      <Route exact path="/dashboard/" component={Dashboard} />
      <Route exact path="/sign-in/" component={SignIn} />
    </Switch>
  </Router>
);
