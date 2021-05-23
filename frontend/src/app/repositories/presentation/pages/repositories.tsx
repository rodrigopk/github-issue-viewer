import React from 'react';

import { Center, Spinner } from '../../../../libs/ui';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useListUserRepositories } from '../../application/use_list_user_repositories';
import { RepositoriesContainer } from '../../contexts';
import { Repository } from '../../domain';
import { RepositoryGrid } from '../layouts';

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
      <RepositoryGrid repositories={repositories as Repository[]} />
    </RepositoriesContainer>
  );
};
