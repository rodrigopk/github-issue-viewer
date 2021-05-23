import { useContext } from 'react';

import { useQuery } from '../../../libs/query';
import { AuthenticationContext } from '../../authentication/contexts';
import { IssuesFacade } from '../infrastructure/issues.facade';
import { AccessTokenNotFoundError } from '../../authentication/domain/access_token_not_found.error';
import { Repository } from '../../repositories/domain';

export const useGetRepositoryIssues = (
  repository: Repository | undefined,
  facade = new IssuesFacade(),
) => {
  const page = 1;
  const { accessToken } = useContext(AuthenticationContext);
  const { data, error, isLoading, isError } = useQuery(
    `repo/${repository?.id}/issues/${page}`,
    async () => {
      if (!accessToken) throw new AccessTokenNotFoundError();
      if (!repository) throw new AccessTokenNotFoundError();

      return await facade.listRepositoryIssues({
        accessToken,
        repository,
        page,
      });
    },
    {
      staleTime: Infinity,
    },
  );

  return { issues: data, error, isError, isLoading };
};
