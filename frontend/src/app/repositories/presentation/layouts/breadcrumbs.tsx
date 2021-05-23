import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '../../../../libs/ui';

export const RepositoryBreadcrumbs: React.FC<{}> = () => (
  <Breadcrumb separator=">">
    <BreadcrumbItem>
      <BreadcrumbLink isCurrentPage>Repositories</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
