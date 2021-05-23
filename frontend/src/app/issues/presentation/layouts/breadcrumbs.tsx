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
  Divider,
  Text,
} from '../../../../libs/ui';

export const DetailBreadcrumbs: React.FC<{ issueNumber: number }> = ({
  issueNumber,
}) => {
  const { repoId } = useParams<{ issueId: string; repoId: string }>();

  return (
    <>
      <Breadcrumb color="gray.600" separator=">">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={appRoutes.repositories.root}>
            <Text color="gray.600">Repositories</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={routeBuilders.issues.root(repoId)}>
            <Text color="gray.600">Issues</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Text color="gray.600">{`#${issueNumber}`}</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider mt={4} />
    </>
  );
};

export const ListBreadcrumbs: React.FC<{}> = () => (
  <>
    <Breadcrumb color="gray.600" separator=">">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to={appRoutes.repositories.root}>
          <Text color="gray.600">Repositories</Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>
          <Text color="gray.600">Issues</Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Divider mt={4} />
  </>
);
