import React from 'react';
import { routeBuilders, useHistory } from '../../../../libs/router';

import { Card } from '../../../shared/presentation/layouts';
import { Repository } from '../../domain';

export const RepositoryCard: React.FC<{ repository: Repository }> = ({
  repository,
}) => {
  const history = useHistory();

  const navigateToRepositoryIssues = () => {
    history.push(routeBuilders.issues.root(`${repository.id}`));
  };

  return (
    <Card
      title={repository.name}
      caption={repository.description}
      onClick={navigateToRepositoryIssues}
    />
  );
};
