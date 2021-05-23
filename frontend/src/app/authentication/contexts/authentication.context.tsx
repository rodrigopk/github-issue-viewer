import React from 'react';

import { AccessToken } from '../domain';

export const AuthenticationContext = React.createContext<{
  accessToken: AccessToken | null;
  setAccessToken?: (token: AccessToken) => void;
}>({
  accessToken: null,
});
