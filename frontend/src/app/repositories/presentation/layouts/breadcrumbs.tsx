import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Text,
} from '../../../../libs/ui';

export const RepositoryBreadcrumbs: React.FC<{}> = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>
          <Text color="gray.600">Repositories</Text>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Divider mt={4} />
  </>
);
