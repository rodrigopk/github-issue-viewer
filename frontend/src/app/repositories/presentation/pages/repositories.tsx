import React from 'react';

import { Box, Center, Flex, Spinner } from '../../../../libs/ui';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useListUserRepositories } from '../../application/use_list_user_repositories';
import { RepositoriesContainer } from '../../contexts';
import { Repository } from '../../domain';
import { RepositoryBreadcrumbs, RepositoryGrid } from '../layouts';

export const Repositories: React.FC<{}> = () => {
  const { repositories, error, isError, isLoading } = useListUserRepositories();

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
    <RepositoriesContainer>
      <Flex direction="column" p={8}>
        <RepositoryBreadcrumbs />
        <Box mt={8}>
          <RepositoryGrid repositories={repositories as Repository[]} />
        </Box>
      </Flex>
    </RepositoriesContainer>
  );
};
