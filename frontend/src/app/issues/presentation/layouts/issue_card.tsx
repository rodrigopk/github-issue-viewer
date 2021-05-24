import React from 'react';

import { routeBuilders, useHistory, useParams } from '../../../../libs/router';
import { Card } from '../../../shared/presentation/layouts';
import { Issue } from '../../domain';

export const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  const { repoId } = useParams<{ repoId: string }>();
  const history = useHistory();

  const navigateToIssueDetail = () => {
    history.push(routeBuilders.issues.detail(repoId, `${issue.id}`));
  };

  return (
    <Card
      title={issue.title}
      caption={`#${
        issue.number
      } created at ${issue.createdAt.toDateString()} by ${issue.author}`}
      onClick={navigateToIssueDetail}
    />
  );
};
