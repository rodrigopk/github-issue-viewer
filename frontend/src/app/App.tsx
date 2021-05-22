import React from 'react';

import { Router, Switch, Route } from '../libs/router';
import { Status } from './status/presentation/pages/status';
import { Signin } from './authentication/presentation/pages/signin';

const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/status">
        <Status />
      </Route>
      <Route path="/">
        <Signin />
      </Route>
    </Switch>
  </Router>
);

export default App;
