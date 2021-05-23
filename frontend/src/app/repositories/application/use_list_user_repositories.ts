import { useContext } from 'react';

import { useQuery } from '../../../libs/query';
import { AuthenticationContext } from '../../authentication/contexts';
import { RepositoriesFacade } from '../infrastructure/repositories.facade';
import { AccessTokenNotFoundError } from './access_token_not_found.error';

export const useListUserRepositories = (facade = new RepositoriesFacade()) => {
  const { accessToken } = useContext(AuthenticationContext);
  const { data, error, isLoading, isError } = useQuery(
    'repositories',
    async () => {
      if (accessToken) {
        return await facade.listRepositories(accessToken);
      } else {
        throw new AccessTokenNotFoundError();
      }
    },
    {
      retry: false,
      staleTime: Infinity,
    },
  );

  return { repositories: data, error, isError, isLoading };
};
