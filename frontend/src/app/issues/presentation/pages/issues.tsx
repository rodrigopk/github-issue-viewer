import React, { useContext, useState } from 'react';

import { appRoutes, useHistory, useParams } from '../../../../libs/router';
import { Box, Center, Flex, Spinner } from '../../../../libs/ui';
import { useGetRepositoryForId } from '../../../repositories/application/use_get_repository_for_id';
import { RepositoriesContainer } from '../../../repositories/contexts';
import { Repository } from '../../../repositories/domain';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useGetRepositoryIssues } from '../../application/use_get_repository_issues';
import { IssuesContainer, IssuesContext } from '../../contexts';
import { Issue } from '../../domain';
import { IssuesGrid, ListBreadcrumbs, Pagination } from '../layouts';

const RepositoryIssues: React.FC<{}> = () => {
  const history = useHistory();
  const { repoId } = useParams<{ repoId: string }>();
  const { repository } = useGetRepositoryForId(repoId);
  const { setIssues } = useContext(IssuesContext);
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

  if (setIssues && issues) setIssues(issues);

  return (
    <Flex direction="column" p={8}>
      <ListBreadcrumbs />
      <Box mt={8}>
        <IssuesGrid issues={issues as Issue[]} />
        {issues && issues.length > 0 && (
          <Pagination
            numberOfItems={(repository as Repository).issuesCount}
            page={page}
            onUpdatePage={setPage}
          />
        )}
      </Box>
    </Flex>
  );
};

export const Issues: React.FC<{}> = () => {
  return (
    <RepositoriesContainer>
      <IssuesContainer>
        <RepositoryIssues />
      </IssuesContainer>
    </RepositoriesContainer>
  );
};
