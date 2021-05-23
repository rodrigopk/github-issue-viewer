import React from 'react';

import { Router, Switch, Route } from '../libs/router';
import { Status } from './status/presentation/pages/status';
import { Signin } from './authentication/presentation/pages/signin';
import { Redirect } from './authentication/presentation/pages/redirect';
import { Repositories } from './repositories/presentation/pages/repositories';
import { appRoutes } from './shared/navigation';

const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path={appRoutes.repositories.root}>
        <Repositories />
      </Route>
      <Route path={appRoutes.status.root}>
        <Status />
      </Route>
      <Route path={appRoutes.auth.redirect}>
        <Redirect />
      </Route>
      <Route path={appRoutes.auth.root}>
        <Signin />
      </Route>
    </Switch>
  </Router>
);

export default App;
