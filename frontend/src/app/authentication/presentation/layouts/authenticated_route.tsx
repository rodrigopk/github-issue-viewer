import React, { useContext } from 'react';

import { Redirect, Route, appRoutes } from '../../../../libs/router';
import { AuthenticationContext } from '../../contexts';

export const AuthenticatedRoute: React.FC<{ path: string }> = ({
  path,
  children,
}) => {
  const { accessToken } = useContext(AuthenticationContext);

  return accessToken ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to={appRoutes.auth.root} />
  );
};
