import React, { useContext } from 'react';

import { SimpleGrid } from '../../../../libs/ui';
import { EmptyState } from '../../../shared/presentation/layouts';
import { RepositoriesContext } from '../../contexts';
import { Repository } from '../../domain';
import { RepositoryCard } from '../layouts';

export const RepositoryGrid: React.FC<{ repositories: Repository[] }> = ({
  repositories,
}) => {
  const { setRepositories } = useContext(RepositoriesContext);

  if (repositories.length === 0)
    return <EmptyState message="Could not find any repositories" />;
  if (setRepositories) setRepositories(repositories);

  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} spacingY={4} spacingX={2} p={2}>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </SimpleGrid>
  );
};
