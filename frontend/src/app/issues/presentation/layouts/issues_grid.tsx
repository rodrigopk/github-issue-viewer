import React from 'react';

import { SimpleGrid } from '../../../../libs/ui';
import { EmptyState } from '../../../shared/presentation/layouts';
import { Issue } from '../../domain';
import { IssueCard } from '../layouts/issue_card';

export const IssuesGrid: React.FC<{ issues: Issue[] }> = ({ issues }) => {
  if (issues.length === 0)
    return <EmptyState message="Could not find any open issues." />;

  return (
    <SimpleGrid columns={{ sm: 1, md: 3 }} spacingY={4} spacingX={2} p={2}>
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </SimpleGrid>
  );
};
