import React from 'react';

import { Router, Switch, Route, appRoutes } from '../libs/router';
import { Status } from './status/presentation/pages/status';
import {
  Signin,
  Redirect,
  AuthenticatedRoute,
  AuthenticationContainer,
} from './authentication';
import { Repositories } from './repositories/presentation/pages/repositories';
import { Issues, IssueDetail } from './issues/presentation/pages';

const App: React.FC<{}> = () => (
  <AuthenticationContainer>
    <Router>
      <Switch>
        <AuthenticatedRoute path={appRoutes.repositories.issues.detail}>
          <IssueDetail />
        </AuthenticatedRoute>
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
