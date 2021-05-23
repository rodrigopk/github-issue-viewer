import React, { useState } from 'react';

import { appRoutes, useHistory, useParams } from '../../../../libs/router';
import { Center, Flex, SimpleGrid, Spinner, Text } from '../../../../libs/ui';
import { useGetRepositoryForId } from '../../../repositories/application/use_get_repository_for_id';
import { RepositoriesContainer } from '../../../repositories/contexts';
import { ErrorState } from '../../../shared/presentation/layouts';
import { useGetRepositoryIssues } from '../../application/use_get_repository_issues';
import { Issue } from '../../domain';

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
      Could not find any issues
    </Text>
  </Flex>
);

const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navigateToIssueDetail = () => {};

  return (
    <Flex
      p={4}
      w={{ sm: 'xs', md: 'sm' }}
      h="125px"
      direction="column"
      justify="space-between"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow={isHovered ? 'lg' : 'md'}
      onClick={navigateToIssueDetail}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer">
      <Text variant="bold">{issue.title}</Text>
      <Text variant="caption" color="gray.600">
        {`#${issue.number} created at ${issue.createdAt.toDateString()} by ${
          issue.author
        }`}
      </Text>
    </Flex>
  );
};

const IssuesList: React.FC<{ issues: Issue[] }> = ({ issues }) => {
  if (issues.length === 0) return <EmptyState />;

  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} spacingY={4} spacingX={2} p={2}>
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </SimpleGrid>
  );
};

const RepositoryIssues: React.FC<{}> = () => {
  const { repoId } = useParams<{ repoId: string }>();
  const history = useHistory();
  const { repository } = useGetRepositoryForId(repoId);
  const { issues, isLoading, isError, error } = useGetRepositoryIssues(
    repository,
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

  return <IssuesList issues={issues as Issue[]} />;
};

export const Issues: React.FC<{}> = () => {
  return (
    <RepositoriesContainer>
      <RepositoryIssues />
    </RepositoriesContainer>
  );
};
