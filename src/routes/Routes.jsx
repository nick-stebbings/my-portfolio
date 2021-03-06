import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const ROUTE_STRINGS = ['Projects', 'Skills', 'Contact'];

import Home from '@/pages/Home';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}
