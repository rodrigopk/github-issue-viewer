import React from 'react';

import { Router, Switch, Route, appRoutes } from '../libs/router';
import { Status } from './status/presentation/pages/status';
import { Signin } from './authentication/presentation/pages/signin';
import { AuthenticatedRoute } from './authentication/presentation/components/authenticated_route';
import { Redirect } from './authentication/presentation/pages/redirect';
import { AuthenticationContainer } from './authentication/contexts';
import { Repositories } from './repositories/presentation/pages/repositories';
import { Issues } from './issues/presentation/pages/issues';

const App: React.FC<{}> = () => (
  <AuthenticationContainer>
    <Router>
      <Switch>
        <AuthenticatedRoute path={appRoutes.repositories.issues.root}>
          <Issues />
        </AuthenticatedRoute>
        <AuthenticatedRoute path={appRoutes.repositories.root}>
          <Repositories />
        </AuthenticatedRoute>
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
  </AuthenticationContainer>
);

export default App;
