import React, { useState } from 'react';
import { routeBuilders, useHistory } from '../../../../libs/router';

import { Flex, Text } from '../../../../libs/ui';
import { Repository } from '../../domain';

export const RepositoryCard: React.FC<{ repository: Repository }> = ({
  repository,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const navigateToRepositoryIssues = () => {
    history.push(routeBuilders.issues.root(`${repository.id}`));
  };

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
      onClick={navigateToRepositoryIssues}
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
