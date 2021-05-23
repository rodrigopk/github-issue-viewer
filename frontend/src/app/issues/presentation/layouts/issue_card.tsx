import React, { useState } from 'react';

import { routeBuilders, useHistory, useParams } from '../../../../libs/router';
import { Flex, Text } from '../../../../libs/ui';
import { Issue } from '../../domain';

export const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { repoId } = useParams<{ repoId: string }>();
  const history = useHistory();

  const navigateToIssueDetail = () => {
    history.push(routeBuilders.issues.detail(repoId, `${issue.id}`));
  };

  return (
    <Flex
      p={4}
      w={{ sm: 'xs', md: 'sm' }}
      h="125px"
      direction="column"
      justify="space-between"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.500"
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
