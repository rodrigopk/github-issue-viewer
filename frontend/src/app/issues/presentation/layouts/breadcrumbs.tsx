import React from 'react';
import {
  appRoutes,
  Link,
  routeBuilders,
  useParams,
} from '../../../../libs/router';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '../../../../libs/ui';

export const DetailBreadcrumbs: React.FC<{ issueNumber: number }> = ({
  issueNumber,
}) => {
  const { repoId } = useParams<{ issueId: string; repoId: string }>();

  return (
    <Breadcrumb separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to={appRoutes.repositories.root}>
          Repositories
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to={routeBuilders.issues.root(repoId)}>
          Issues
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{`#${issueNumber}`}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export const ListBreadcrumbs: React.FC<{}> = () => (
  <Breadcrumb separator=">">
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to={appRoutes.repositories.root}>
        Repositories
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <BreadcrumbLink isCurrentPage>Issues</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
