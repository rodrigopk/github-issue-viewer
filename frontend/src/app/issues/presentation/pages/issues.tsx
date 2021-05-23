import React, { useState } from 'react';

import { appRoutes, useHistory, useParams } from '../../../../libs/router';
import { Center, Spinner } from '../../../../libs/ui';
import { useGetRepositoryForId } from '../../../repositories/application/use_get_repository_for_id';
import { RepositoriesContainer } from '../../../repositories/contexts';
import { Repository } from '../../../repositories/domain';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useGetRepositoryIssues } from '../../application/use_get_repository_issues';
import { Issue } from '../../domain';
import { IssuesGrid, Pagination } from '../layouts';

const RepositoryIssues: React.FC<{}> = () => {
  const history = useHistory();
  const { repoId } = useParams<{ repoId: string }>();
  const { repository } = useGetRepositoryForId(repoId);
  const [page, setPage] = useState(1);
  const { issues, isLoading, isError, error } = useGetRepositoryIssues(
    repository,
    page,
  );

  if (!repository) {
    history.push(appRoutes.repositories.root);
  }

  if (isLoading)
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );

  if (isError)
    return (
      <Center height="100vh">
        <ErrorState error={error as Error} />
      </Center>
    );

  return (
    <>
      <IssuesGrid issues={issues as Issue[]} />
      <Pagination
        numberOfItems={(repository as Repository).issuesCount}
        page={page}
        onUpdatePage={setPage}
      />
    </>
  );
};

export const Issues: React.FC<{}> = () => {
  return (
    <RepositoriesContainer>
      <RepositoryIssues />
    </RepositoriesContainer>
  );
};
