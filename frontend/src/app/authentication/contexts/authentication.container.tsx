import React, { useState } from 'react';

import { AccessToken } from '../domain';
import { AuthenticationContext } from './authentication.context';

const ACCESS_TOKEN_KEY = 'accessToken';

const useAccessTokenState = (): [
  AccessToken | null,
  (arg: AccessToken) => void,
] => {
  const retrieved = localStorage.getItem(ACCESS_TOKEN_KEY);
  const stored = retrieved ? JSON.parse(retrieved) : null;

  const [accessToken, setAccessToken] = useState<AccessToken | null>(
    stored !== 'null' && stored !== null ? AccessToken.create(stored) : null,
  );

  return [accessToken, setAccessToken];
};

export const AuthenticationContainer: React.FC<{}> = ({ children }) => {
  const [accessToken, setAccessToken] = useAccessTokenState();

  const handleUpdateAccessToken = (token: AccessToken) => {
    try {
      localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(token.toJSON()));

      setAccessToken(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        accessToken: accessToken,
        setAccessToken: handleUpdateAccessToken,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
