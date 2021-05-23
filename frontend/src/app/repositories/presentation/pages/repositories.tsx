import React, { useState } from 'react';

import { Center, Flex, SimpleGrid, Spinner, Text } from '../../../../libs/ui';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useListUserRepositories } from '../../application/use_list_user_repositories';
import { Repository } from '../../domain';

export const EmptyState: React.FC<{}> = () => (
  <Flex
    justify="center"
    align="center"
    direction="column"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    p={8}>
    <Text my={2} variant="h5">
      Could not find any repositories
    </Text>
  </Flex>
);

const RepositoryCard: React.FC<{ repository: Repository }> = ({
  repository,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      p={4}
      w={{ sm: 'xs', md: 'sm' }}
      h="175px"
      direction="column"
      justify="space-between"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow={isHovered ? 'lg' : 'md'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer">
      <Text variant="h5">{repository.name}</Text>
      <Text variant="caption" color="gray.600">
        {repository.description}
      </Text>
      <Text>Open Issues: {repository.issuesCount}</Text>
    </Flex>
  );
};

const RepositoryList: React.FC<{ repositories: Repository[] }> = ({
  repositories,
}) => {
  if (repositories.length === 0) return <EmptyState />;

  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} spacingY={4} spacingX={2} p={2}>
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </SimpleGrid>
  );
};

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

  return <RepositoryList repositories={repositories as Repository[]} />;
};
