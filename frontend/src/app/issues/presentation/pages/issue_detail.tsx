import React from 'react';
import { routeBuilders, useHistory, useParams } from '../../../../libs/router';

import { Box, Flex, Markdown, Text } from '../../../../libs/ui';
import { useGetIssueForId } from '../../application/use_get_issue_for_id';
import { IssuesContainer } from '../../contexts';

const Content: React.FC<{}> = () => {
  const history = useHistory();
  const { issueId, repoId } = useParams<{ issueId: string; repoId: string }>();
  const { issue } = useGetIssueForId(issueId);

  if (!issue) {
    history.push(routeBuilders.issues.root(repoId));
  }

  return (
    <Flex direction="column" p={8}>
      <Flex mb={4}>
        <Text variant="h3">{`${issue?.title} (#${issue?.number})`}</Text>
      </Flex>
      <Text mb={12} variant="caption" color="gray.600">
        {`${
          issue?.author
        } opened this issue at ${issue?.createdAt.toDateString()}`}
      </Text>
      <Box p={4} borderWidth="1px" borderRadius="lg" borderColor="gray.500">
        <Markdown content={issue?.body || ''} />
      </Box>
    </Flex>
  );
};

export const IssueDetail: React.FC<{}> = () => {
  return (
    <IssuesContainer>
      <Content />
    </IssuesContainer>
  );
};
